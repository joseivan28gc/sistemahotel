const env={
    host: 'dpg-cruui1u8ii6s738i0q6g-a',
    port: 5432,
    username: 'sistemahotel_user',
    password: 'BL5SeJx3UZXov5bF1WuTbHqyay67kvng',
    database: 'sistemahotel',
  dialect: 'postgres',
  
  pool:{
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    
  }
  }
  module.exports =env;