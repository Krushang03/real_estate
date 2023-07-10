import psycopg2

def connection():
    conn = psycopg2.connect(
        host='localhost',
        port='5432',
        database='project',
        user='postgres',
        password='123456789'
    )
    return conn

def create_table():
    conn = connection()
    cursor = conn.cursor()
    query  = """CREATE TABLE IF NOT EXISTS users(id bigserial,username char(100) unique not null,email varchar(100) unique not null, password varchar(100) not null )"""
    cursor.execute(query)
    conn.commit()
    cursor.close()
    conn.close()
    
    
def c_user(username,email, password):
    conn = connection()
    cursor = conn.cursor()

    query = "INSERT INTO users (username,email, password) VALUES (%s, %s, %s)"
    cursor.execute(query, (username, email, password))

    conn.commit()
    cursor.close()
    conn.close()

def g_user(email):
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM users WHERE email = '{email}'")
    user = cursor.fetchone()
    conn.commit()
    cursor.close()
    conn.close()

    return user
