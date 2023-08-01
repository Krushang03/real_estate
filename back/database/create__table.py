from database.connectionn import connection
def create_tables():
    conn = connection()
    cursor = conn.cursor()
    cursor.execute("""CREATE TABLE IF NOT EXISTS users (
                        u_id varchar(1000) primary key,
                        username VARCHAR(100) UNIQUE NOT NULL,
                        email VARCHAR(100) NOT NULL,
                        password VARCHAR(100) NOT NULL)   
    """)
    cursor.execute("""CREATE TABLE IF NOT EXISTS property(
                        u_id varchar(1000) primary key,
                        Holder_name varchar(100) not null,
                        mobile_no numeric not null, 
                        house_no varchar(10) not null,
                        area_name varchar(20) not null, 
                        state_name char(20) not null, 
                        city_name char(20) not null,
                        pin_code numeric not null,
                        photo TEXT[] not null,
                        bhk  varchar(10) not null,
                        prop_size varchar(10) not null,
                        price varchar(20) not null,
                        furniture char(30) not null,
                        sell_or_rent char(30) not null,
                        dis varchar(100) not null)
                        """)
    conn.commit()
    cursor.close()
    conn.close()