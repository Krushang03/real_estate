from database.connectionn import connection
#city state country area
#searching property
def search_prop(city_name, state_name, country_name, area_name):
    conn = connection()
    cursor = conn.cursor()
    query = "SELECT * FROM property WHERE 1=1"
    params = []
    if city_name:
        query += " AND city_name = %s"
        params.append(city_name)
        
    if state_name:
        query += " AND state_name = %s"
        params.append(state_name)
        
    if country_name:
        query += " AND country_name = %s"
        params.append(country_name)
        
    if area_name:
        query += " AND area_name = %s"
        params.append(area_name)
    print(query)    
    cursor.execute(query, params)
    data = cursor.fetchall()
    conn.commit()
    cursor.close()
    conn.close()
    return data