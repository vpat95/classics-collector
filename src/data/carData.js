const carData = [
 {id: 1, make:'Nissan', model:'Skyline', year:1998, price:60000, image:'images/gtr.webp', available:true, specs:{hp: '276 hp', drivetrain:'awd', transmission: 'manual'}}, 
 {id: 2, make:'Toyota', model:'Supra', year:1998, price:50000, image:'images/supra.webp', available:true, specs:{hp: '225 hp', drivetrain:'rwd', transmission: 'manual'}},
 {id: 3, make:'Mazda', model:'RX-7', year:1995, price:45000, image:'images/rx7.jpeg', available:true, specs:{hp: '255 hp', drivetrain:'rwd', transmission: 'manual'}},
 {id: 4, make:'Honda', model:'S2000', year:2000, price:30000, image:'images/s2000.jpeg', available:false, specs:{hp: '240 hp', drivetrain:'rwd', transmission: 'manual'}},
 {id: 5, make:'Mitsubishi', model:'Evolution', year:2002, price:40000, image:'images/evo.jpg', available:true, specs:{hp: '280 hp', drivetrain:'awd', transmission: 'manual'}},
 {id: 6, make:'Range Rover', model:'Kiddie Car', year:2020, price:5000, image:'images/range.jpeg', available:true, specs:{hp: '10000 hp', drivetrain:'rwd', transmission: 'auto'}}
]

const getNextId = ((id) => () => ++id)(6)
export {carData, getNextId}