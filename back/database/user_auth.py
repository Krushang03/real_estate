from database.connectionn import connection 


def user_auth(u_id):
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"SELECT COUNT(*) from users WHERE u_id = '{u_id}'")
    count = cursor.fetchone()[0]
    conn.commit()
    cursor.close()
    conn.close()
    if count > 0:
        return 1
    else:
        return 0    