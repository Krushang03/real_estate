from database.connectionn import connection


def a_prop(u_id, Holder_name, mobile_no, house_no, area_name, state_name, city_name,sell_or_rent, pin_code, photo, bhk, prop_size, price, furniture, dis):
    
    
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"""INSERT INTO property(u_id, Holder_name, mobile_no, house_no, area_name, state_name, city_name,sell_or_rent, pin_code, photo, bhk, prop_size, price, furniture, dis) VALUES ('{u_id}', '{Holder_name}', {mobile_no}, '{house_no}', '{area_name}', '{state_name}', '{city_name}','{sell_or_rent}', {pin_code}, ARRAY {photo}, '{bhk}', '{prop_size}', {price}, '{furniture}', '{dis}')""")
    
    
    conn.commit()
    cursor.close()
    conn.close()