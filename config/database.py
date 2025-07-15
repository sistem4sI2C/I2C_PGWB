import os
import psycopg2
import sys

# Agregar el directorio padre al path para importar database_config
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    from database_config import DB_CONFIG
except ImportError:
    # Configuración por defecto si no existe el archivo
    DB_CONFIG = {
        'host': '192.168.1.95',
        'database': 'pg_wb',
        'user': 'soporte',
        'password': 'soporte',
        'port': 5432
    }

def get_db_connection():
    """
    Obtiene una conexión a la base de datos
    
    Returns:
        connection: Conexión a la base de datos PostgreSQL
    """
    try:
        print(f"Intentando conectar a: {DB_CONFIG['host']}:{DB_CONFIG['port']}/{DB_CONFIG['database']}")
        
        return psycopg2.connect(
            host=DB_CONFIG['host'],
            database=DB_CONFIG['database'],
            user=DB_CONFIG['user'],
            password=DB_CONFIG['password'],
            port=DB_CONFIG['port'],
            connect_timeout=10  # Timeout de 10 segundos
        )
    except psycopg2.OperationalError as e:
        print(f"Error de conexión: {e}")
        raise Exception(f"Error al conectar a la base de datos remota: {str(e)}")
    except Exception as e:
        print(f"Error inesperado: {e}")
        raise Exception(f"Error al conectar a la base de datos: {str(e)}")

def init_db():
    """
    Inicializa la base de datos creando las tablas necesarias si no existen
    """
    conn = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        
        # Crear tabla de investigadores con los campos actualizados
        cur.execute("""
            CREATE TABLE IF NOT EXISTS investigadores (
                id SERIAL PRIMARY KEY,
                nombre_completo VARCHAR(200),
                curp VARCHAR(18) UNIQUE,
                rfc VARCHAR(13),
                no_cvu VARCHAR(50),
                correo VARCHAR(100) UNIQUE,
                telefono VARCHAR(20),
                ultimo_grado_estudios TEXT,
                empleo_actual TEXT,
                linea_investigacion TEXT,
                nacionalidad VARCHAR(100),
                fecha_nacimiento DATE,
                password VARCHAR(255),
                fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                origen VARCHAR(50),
                archivo_procesado BYTEA
            )
        """)
        
        # Crear tabla de administradores (adm)
        cur.execute("""
            CREATE TABLE IF NOT EXISTS adm (
                id SERIAL PRIMARY KEY,
                nombre VARCHAR(100) UNIQUE,
                correo VARCHAR(100) UNIQUE,
                contrasena VARCHAR(255)
            )
        """)
        
        # Crear tabla de desarrolladores (dev)
        cur.execute("""
            CREATE TABLE IF NOT EXISTS dev (
                id SERIAL PRIMARY KEY,
                nombre VARCHAR(100) UNIQUE,
                correo VARCHAR(100) UNIQUE,
                contrasena VARCHAR(255)
            )
        """)
        
        conn.commit()
        cur.close()
        conn.close()
        
    except Exception as e:
        if conn:
            conn.close()
        raise Exception(f"Error al inicializar la base de datos: {str(e)}") 