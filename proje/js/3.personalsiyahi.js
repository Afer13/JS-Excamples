const personal = [
  {
    id: 0,
    personal_ad: "Rehimov Afər",
    personal_ixtisas: "BackEnd Devoloper",
    personal_haqq:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit sunt vel fugiat voluptatibus eum ipsum ex repellat maiores molestias commodi impedit, doloribus, dignissimos recusandae hic minus odit harum quae quia.",
    personal_img:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 1,
    personal_ad: "Rehimov Izzet",
    personal_ixtisas: "FrontEnd Devoloper",
    personal_haqq:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit sunt vel fugiat voluptatibus eum ipsum ex repellat maiores molestias commodi impedit, doloribus, dignissimos recusandae hic minus odit harum quae quia.",
    personal_img:""
  },
  {
    id: 2,
    personal_ad: "Rehimov Ibrahim",
    personal_ixtisas: "Softvare Injiner",
    personal_haqq:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum esse itaque sequi doloremque consequatur aut facilis porro, natus fuga velit provident modi exercitationem repellat culpa magni aperiam adipisci in beatae?",
    personal_img:"https://tr.123rf.com/photo_125688059_smiling-asian-man-standing-with-hands-folded-concept-of-engineering-jobs.html?vti=m21id5t6hj67cfyrwq-1-106"
  },
  {
    id: 3,
    personal_ad: "Kelbiyev Aqil",
    personal_ixtisas: "QA Tester",
    personal_haqq:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis sunt vero voluptates, perferendis qui culpa suscipit minima repellendus sequi laborum eveniet totam nemo maxime enim asperiores a? At, neque?",
    personal_img:"https://tr.123rf.com/photo_52231994_studio-shot-of-young-man-looking-at-the-camera-isolated-on-white-background-horizontal-format-he-has.html?vti=m21id5t6hj67cfyrwq-1-45"
  },
  {
    id: 4,
    personal_ad: "Rehimov Səlvər",
    personal_ixtisas: "Sistem Admistratoru",
    personal_haqq:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit sunt vel fugiat voluptatibus eum ipsum ex repellat maiores molestias commodi impedit, doloribus, dignissimos recusandae hic minus odit harum quae quia.",
    personal_img:"https://tr.123rf.com/photo_130592146_handsome-young-man-in-pink-shirt-over-isolated-blue-background-keeping-the-arms-crossed-in-frontal-p.html?vti=m21id5t6hj67cfyrwq-2-108"
  },
  {
    id: 5,
    personal_ad: "Aliosmano Amil",
    personal_ixtisas: "Cihaz Mühəndisi",
    personal_haqq:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit sunt vel fugiat voluptatibus eum ipsum ex repellat maiores molestias commodi impedit, doloribus, dignissimos recusandae hic minus odit harum quae quia.",
    personal_img:"https://tr.123rf.com/photo_65423767_portrait-of-real-black-african-man-with-no-expression-id-or-passport-photo-full-collection-of-divers.html?vti=m21id5t6hj67cfyrwq-1-117"
  },
  {
    id: 6,
    personal_ad: "Şükürlü Aydın",
    personal_ixtisas: "Linux İnjiner",
    personal_haqq:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti voluptas perferendis in ipsa, voluptates quia accusamus alias adipisci quaerat itaque facere, fugit nesciunt odit id excepturi aperiam aut. Cupiditate!",
    personal_img:"https://tr.123rf.com/photo_46629285_close-up-portrait-handsome-smiling-man-with-beard.html?vti=m21id5t6hj67cfyrwq-2-60"
  },
  {
    id: 7,
    personal_ad: "Aliosmanov Suleyman",
    personal_ixtisas: "İnşaat Mühəndisi",
    personal_haqq:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, earum beatae. Unde doloribus cupiditate, labore, nobis officia magni reprehenderit nostrum vitae incidunt, voluptatem assumenda sit aspernatur provident optio nemo vero!",
    personal_img:"https://tr.123rf.com/photo_23307577_an-asian-old-man-happy-face-smiling-and-his-body-full-of-tattoo.html?vti=m21id5t6hj67cfyrwq-2-59"
  },
  {
    id: 8,
    personal_ad: "Məlikov Zamir",
    personal_ixtisas: "Çuma",
    personal_haqq:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit sunt vel fugiat voluptatibus eum ipsum ex repellat maiores molestias commodi impedit, doloribus, dignissimos recusandae hic minus odit harum quae quia.",
    personal_img:"https://tr.123rf.com/photo_69635796_portrait-of-elderly-black-man-looking-at-camera-in-retirement-home-with-group-of-friends-in-backgrou.html?vti=m21id5t6hj67cfyrwq-2-91"
  }
  
];
var ID=0;
var Img=document.querySelector('#person-img'),
Ad=document.querySelector('.author'),
Ixtisas=document.querySelector('.job'),
Info=document.querySelector('.info');
function next(){
  ID++;
  if(ID==personal.length)
    {
        ID=0;
    }
    Img.src=personal[ID].personal_img;
    Ad.innerHTML=personal[ID].personal_ad;
    Ixtisas.innerHTML=personal[ID].personal_ixtisas;
    Info.innerHTML=personal[ID].personal_haqq;
    
    
}
function prev(){
  ID--;
  if(ID==-1)
    {
        ID=personal.length-1;
    }
  Img.src=personal[ID].personal_img;
    Ad.innerHTML=personal[ID].personal_ad;
    Ixtisas.innerHTML=personal[ID].personal_ixtisas;
    Info.innerHTML=personal[ID].personal_haqq;
    
    
}
function random(){
  ID=Math.floor(Math.random()*8);
  Img.src=personal[ID].personal_img;
    Ad.innerHTML=personal[ID].personal_ad;
    Ixtisas.innerHTML=personal[ID].personal_ixtisas;
    Info.innerHTML=personal[ID].personal_haqq;
}