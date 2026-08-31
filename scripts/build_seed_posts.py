import json
from pathlib import Path

source = json.loads(Path('/home/ubuntu/Redes_sociales/calendar.json').read_text())
values = []
for week in source.get('weeks', []):
    for post in week.get('posts', []):
        day_text = str(post.get('day', ''))
        day_number = ''.join(ch for ch in day_text if ch.isdigit())
        if not day_number:
            continue
        platform = post.get('platform', 'Twitter/X').replace('Twitter/X', 'Twitter')
        title = post.get('title', 'Untitled post').replace("'", "''")
        description = (post.get('description') or post.get('hook') or post.get('cta') or '').replace("'", "''")
        pillar = post.get('pillar', '').replace("'", "''")
        post_type = post.get('type', 'Post').replace("'", "''")
        time = post.get('time') or '09:00'
        date = f"2025-01-{int(day_number):02d}"
        values.append(f"('{date}', '{time}', '{day_text.split()[0]}', '{platform}', '{pillar}', '{post_type}', '{title}', '{description}', 'scheduled')")

query = "insert into public.posts (scheduled_date, scheduled_time, weekday, platform, pillar, post_type, title, description, status) values\n" + ',\n'.join(values) + ";"
Path('/tmp/bitaxus_seed_posts.json').write_text(json.dumps({
    'project_id': 'uobglfexvgxeogedthbh',
    'query': query
}, ensure_ascii=False, indent=2))
print(f'Generated {len(values)} seed posts')
