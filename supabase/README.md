# Bitaxus + Supabase

El proyecto `bitaxus-community` contiene la persistencia inicial de la aplicación. La migración `001_bitaxus_core.sql` crea las tablas `posts` y `engagement_metrics`, agrega índices y habilita Row Level Security.

La aplicación estática usa únicamente la URL pública y una clave publicable de Supabase desde `assets/supabase-client.js`. Nunca debe añadirse al repositorio una clave `service_role`.

Planeación carga las publicaciones de `public.posts` y conserva el calendario local como respaldo. Analytics carga `public.engagement_metrics`; la importación y el borrado requieren una sesión autenticada, mientras que la lectura pública permanece habilitada por las políticas RLS.

Para crear un acceso, abre Analytics, escribe un correo y una contraseña de al menos seis caracteres y selecciona **Crear acceso**. Si Supabase tiene activada la confirmación de correo, confirma el mensaje recibido y luego entra desde el mismo panel.
