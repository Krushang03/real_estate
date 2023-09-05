from database.connectionn import connection

#Adding properties into the database
def a_prop(p_id, u_id, Holder_name, mobile_no, house_no, area_name, state_name, city_name, country_name, photo, bhk, prop_size, price, furniture, rent_or_sell, dis):
    
    
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"""INSERT INTO property(p_id, u_id, Holder_name, mobile_no, house_no, area_name, state_name, city_name, country_name, photo, bhk, prop_size, price, furniture, rent_or_sell, dis) VALUES ('{p_id}', '{u_id}', '{Holder_name}', {mobile_no}, '{house_no}', '{area_name}', '{state_name}', '{city_name}', '{country_name}', array {photo}, '{bhk}', '{prop_size}', {price}, '{furniture}','{rent_or_sell}', '{dis}')""")
    
    
    conn.commit()
    cursor.close()
    conn.close()
    
#Feching listed data from table property
def s_data():
    conn = connection()
    cursor = conn.cursor()
    cursor.execute("SELECT p_id, photo, city_name, state_name, bhk, price, prop_size FROM property")
    data = cursor.fetchall()
    print(data)
    conn.commit()
    cursor.close()
    conn.close()
    return data


# feching all data of property from database table
def a_data(p_id):
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM property where p_id = '{p_id}'")
    data = cursor.fetchone()
    print(data)
    conn.commit()
    cursor.close()
    conn.close()
    return data

#my_property details
def my_prop(u_id):
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM property WHERE u_id = '{u_id}'")
    data = cursor.fetchall()
    conn.commit()
    cursor.close()
    conn.close()
    return data



# deleting data
def del_re(p_id):
    conn = connection()
    with conn.cursor() as cursor:
        cursor.execute(f"""DELETE FROM property WHERE p_id = '{p_id}' """)
    conn.commit()