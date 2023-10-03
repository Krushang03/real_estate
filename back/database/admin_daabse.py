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




#changing status
def status_change(p_id, new_status):
    conn = connection()
    cursor = conn.cursor()

    cursor.execute(f"UPDATE property set statuss = '{new_status}' where p_id = '{p_id}'")


    conn.commit()
    cursor.close()
    conn.close()

    return None
