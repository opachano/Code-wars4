//My code

function namesSorter (arr) {
  let tempArr = [];
  arr.forEach((x) => {
    x.forEach((y) => {
      tempArr.push(y) 
    })
  })
  tempArr.sort((a, b)=> {
    if(a.length > b.length) {
      return 1
    }
    if(a.length < b.length) {
      return -1
    }
    if (a > b) {
      return 1
    }
    if (a < b) {
      return -1
    }
  })
  return tempArr;
}

//Best Practice

function namesSorter(departmentsArray) {
  return departmentsArray.reduce((total,el)=>{return total.concat(el)}).sort((a,b)=>{ return a.length-b.length || a.localeCompare(b)})
}
