
const target = document.getElementById('mobile-view-menu')

target?.addEventListener('click',function(){
     
      const list= document.getElementById('mobile-menu').classList.toggle('addItemList');
                  document.getElementsByClassName('signup')[0].classList.toggle('addItemList');
                  document.getElementsByClassName('login')[0].classList.toggle('addItemList');

      console.log(list);
     
})

// function openDrawer(){
//     console.log('clicked');
//     // const target = document.getElementsByTagName('nav').style.display='block';
// //   const list= document.getElementById('mobile-menu').classList;
// //   console.log(list);
// //   list.add('addItemList')
//     }

// console.log(document.getElementsByTagName('nav'));
