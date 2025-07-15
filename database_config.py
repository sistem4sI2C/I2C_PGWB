# Configuración de la base de datos PostgreSQL remota en Windows
# Laptop remota IP: 192.168.1.95

DB_CONFIG = {
    'host': '192.168.1.95',       # IP de la laptop donde está pgAdmin4
    'database': 'pg_wb',          # Nombre de tu base de datos
    'user': 'soporte',            # Usuario de la base de datos
    'password': 'soporte',        # Contraseña del usuario
    'port': 5432                  # Puerto por defecto de PostgreSQL
}

# Configuración del servidor
SERVER_CONFIG = {
    'port': 8000,
    'host': '0.0.0.0'
}

# Instrucciones para Windows:
# 1. En la laptop 192.168.1.95, abre pgAdmin4
# 2. Ve a Server Properties > Connection
# 3. Verifica que el puerto sea 5432
# 4. En Windows Firewall, permite conexiones al puerto 5432
# 5. Ejecuta la prueba de conexión
#   Navega a la carpeta `backend` y ejecuta:
#   ```
#   cd ruta\\a\\tu\\proyecto\\I2C_PGWB\\backend
#   python -c "from config.database import get_db_connection; conn = get_db_connection(); print('✅ Conexión exitosa!'); conn.close()"
#   ```