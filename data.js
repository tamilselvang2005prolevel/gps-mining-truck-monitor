const mines={}

for(let i=1;i<=10;i++){

mines["Mine"+i]=[]

for(let j=1;j<=6;j++){

mines["Mine"+i].push({

num:`TN52AB${i}${j}01`,

model:["Tata 2518","Ashok Leyland","BharatBenz","Tata Signa"][j%4],

driver:["Ramesh","Suresh","Kumar","Mani","Arun","Selva"][j%6],

status:["Active","Idle","Moving"][j%3]

})

}

}