from database.connectionn import connection



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





