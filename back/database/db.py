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



def create_tables():
    conn = connection()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            u_id varchar(1000) primary key,
            username VARCHAR(100) UNIQUE NOT NULL,
            email VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL
        )
    """)
    conn.commit()
    cursor.close()
    conn.close()







def c_user(u_id,username, email, password):
    conn = connection()
    cursor = conn.cursor()

    query = "INSERT INTO users (u_id,username,email, password) VALUES (%s, %s, %s, %s)"
    cursor.execute(query, (u_id,username, email,password))

    conn.commit()
    cursor.close()
    conn.close()






def g_user(email):
    conn = connection()
    cursor = conn.cursor()

    
    cursor.execute(f"SELECT * FROM users WHERE email ='{email}'",)

    user = cursor.fetchone()

    conn.commit()
    cursor.close()
    conn.close()

    return user
