from database.connectionn import connection

#Adding properties into the database
def a_prop(p_id, u_id, Holder_name, mobile_no, house_no, area_name, state_name, city_name, country_name, photo, bhk, prop_size, price, furniture, sell_or_rent, dis, prop_deal, prop_type, ddate, statuss, lightbill):
    
    
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"""INSERT INTO property(p_id, u_id, Holder_name, mobile_no, house_no, area_name, state_name, city_name, country_name, photo, bhk, prop_size, price, furniture, sell_or_rent, dis, prop_deal, prop_type, ddate, statuss, lightbill) VALUES ('{p_id}', '{u_id}', '{Holder_name}', {mobile_no}, '{house_no}', '{area_name}', '{state_name}', '{city_name}', '{country_name}', ARRAY {photo}  , '{bhk}', '{prop_size}', {price}, '{furniture}','{sell_or_rent}', '{dis}',{prop_deal}, '{prop_type}', {ddate}, '{statuss}',  ARRAY {lightbill})""")
    
    
    conn.commit()
    cursor.close()
    conn.close()
    
    
    
    
#Feching some data from table property
def s_data():
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"SELECT p_id, photo, city_name, state_name, bhk, price, prop_size FROM property where statuss = 'verified'")
    data = cursor.fetchall()
    conn.commit()
    cursor.close()
    conn.close()
    return data


# feching all data of property from database table
def a_data(p_id):
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM property where p_id = '{p_id}' ")
    data = cursor.fetchone()
    conn.commit()
    cursor.close()
    conn.close()
    return data







#my_property details of rejected
def my_prop(u_id, status):
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM property WHERE u_id = '{u_id}' and statuss = '{status}'")
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




#fetching pending properties from the database
def all_property():
    conn = connection()
    cursor = conn.cursor()

    cursor.execute(f"SELECT * FROM property",)

    data = cursor.fetchall()

    conn.commit()
    cursor.close()
    conn.close()

    return data


#change prop_deal to true
def change_property_deal(p_id):
        conn = connection()
        cursor = conn.cursor()
        cursor.execute(f"UPDATE property set prop_deal = 'true' where p_id = '{p_id}'")
        conn.commit()
        cursor.close()
        conn.close()

        return None




#searching for perticular property address with help of  "country_name" or/and "city_name" or/and "state_name".
# def searchh():
    
#     conn = connection()
#     cursor = conn.cursor()
#     cursor.execute(f"SELECT * FROM property WHERE ")


