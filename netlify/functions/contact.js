const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requestLog = globalThis.__l2mContactRequests || (globalThis.__l2mContactRequests = new Map());

export default async function handler(request) {
  if (request.method !== 'POST') return new Response(JSON.stringify({ error: 'Método não permitido.' }), { status: 405, headers: { 'content-type': 'application/json' } });
  try {
    const ip = request.headers.get('x-nf-client-connection-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const now = Date.now();
    const recent = requestLog.get(ip) || [];
    const active = recent.filter(timestamp => now - timestamp < 10 * 60 * 1000);
    if (active.length >= 5) return new Response(JSON.stringify({ error: 'Muitas tentativas. Aguarde alguns minutos ou fale pelo WhatsApp.' }), { status: 429, headers: { 'content-type': 'application/json', 'retry-after': '600' } });
    active.push(now); requestLog.set(ip, active);
    const body = await request.json();
    if (body.website) return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'content-type': 'application/json' } });
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const company = String(body.company || '').trim();
    const message = String(body.message || '').trim();
    if (name.length < 2 || name.length > 120 || !emailPattern.test(email) || message.length < 10 || message.length > 4000 || company.length > 160) return new Response(JSON.stringify({ error: 'Confira os dados preenchidos e tente novamente.' }), { status: 400, headers: { 'content-type': 'application/json' } });
    const origin = request.headers.get('origin');
    if (origin && !origin.endsWith('l2m.com.br') && !origin.includes('manus.computer') && !origin.includes('localhost')) return new Response(JSON.stringify({ error: 'Origem não autorizada.' }), { status: 403, headers: { 'content-type': 'application/json' } });
    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceKey) return new Response(JSON.stringify({ error: 'Formulário temporariamente indisponível. Fale com a L2M pelo WhatsApp.' }), { status: 503, headers: { 'content-type': 'application/json' } });
    const response = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, { method: 'POST', headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' }, body: JSON.stringify({ name, email, company: company || null, message, source_path: '/jeito-l2m', status: 'new' }) });
    if (!response.ok) return new Response(JSON.stringify({ error: 'Não foi possível enviar agora. Tente pelo WhatsApp.' }), { status: 502, headers: { 'content-type': 'application/json' } });
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
  } catch { return new Response(JSON.stringify({ error: 'Não foi possível processar a mensagem.' }), { status: 400, headers: { 'content-type': 'application/json' } }); }
}
