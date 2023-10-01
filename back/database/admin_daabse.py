from database.connectionn import connection


#fetching pending properties from the database
def pending_prop():
    conn = connection()
    cursor = conn.cursor()

    cursor.execute(f"SELECT * FROM property WHERE statuss ='pending'",)

    data = cursor.fetchall()

    conn.commit()
    cursor.close()
    conn.close()

    return data

#fetching verified properties from the database
def verified_prop():
    conn = connection()
    cursor = conn.cursor()

    cursor.execute(f"SELECT * FROM property WHERE statuss ='verified'",)

    data = cursor.fetchall()

    conn.commit()
    cursor.close()
    conn.close()

    return data




#fetching verified properties from the database
# def status_change():
#     conn = connection()
#     cursor = conn.cursor()

#     cursor.execute(f"UPDATE proprty")

#     data = cursor.fetchall()

#     conn.commit()
#     cursor.close()
#     conn.close()

#     return data
