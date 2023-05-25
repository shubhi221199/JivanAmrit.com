import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Topimage from './Topimage';
import img from '../Images/vedarambh23.JPG'
import './Gallery.css'
import Cardforgallery from './Cardforgallery';
import FlipImage from './FlipImage';
import Mapcomp from './Mapcomp';

export default function Gallery() {
  return (

    <>

 <Topimage item={img} heading={" Our Gallery"} />
   
 <div className='MaindivGallery'>

  <div className='leftdivgal'>
 <ImageList className='leftList' sx={{ width: 600, height: 1050 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Jivan Amrit~</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList> 
    </div>

<div className='rightdivgal' >


<FlipImage imgf={"https://res.cloudinary.com/raj4485cloud/image/upload/v1684917789/hbqx9t3c92jqfdzamz24.jpg"} imgb={'https://res.cloudinary.com/raj4485cloud/image/upload/v1684917898/r8qhylm9vthnwjcatlpm.jpg'}/>
<FlipImage imgf={"https://res.cloudinary.com/raj4485cloud/image/upload/v1684917789/hbqx9t3c92jqfdzamz24.jpg"} imgb={'https://res.cloudinary.com/raj4485cloud/image/upload/v1684917898/r8qhylm9vthnwjcatlpm.jpg'}/>
<FlipImage imgf={"https://res.cloudinary.com/raj4485cloud/image/upload/v1684917789/hbqx9t3c92jqfdzamz24.jpg"} imgb={'https://res.cloudinary.com/raj4485cloud/image/upload/v1684917898/r8qhylm9vthnwjcatlpm.jpg'}/>
<FlipImage imgf={"https://res.cloudinary.com/raj4485cloud/image/upload/v1684917789/hbqx9t3c92jqfdzamz24.jpg"} imgb={'https://res.cloudinary.com/raj4485cloud/image/upload/v1684917898/r8qhylm9vthnwjcatlpm.jpg'}/>
<FlipImage imgf={"https://res.cloudinary.com/raj4485cloud/image/upload/v1684917789/hbqx9t3c92jqfdzamz24.jpg"} imgb={'https://res.cloudinary.com/raj4485cloud/image/upload/v1684917898/r8qhylm9vthnwjcatlpm.jpg'}/>
<FlipImage imgf={"https://res.cloudinary.com/raj4485cloud/image/upload/v1684917789/hbqx9t3c92jqfdzamz24.jpg"} imgb={'https://res.cloudinary.com/raj4485cloud/image/upload/v1684917898/r8qhylm9vthnwjcatlpm.jpg'}/>
<FlipImage imgf={"https://res.cloudinary.com/raj4485cloud/image/upload/v1684917789/hbqx9t3c92jqfdzamz24.jpg"} imgb={'https://res.cloudinary.com/raj4485cloud/image/upload/v1684917898/r8qhylm9vthnwjcatlpm.jpg'}/>
<FlipImage imgf={"https://res.cloudinary.com/raj4485cloud/image/upload/v1684917789/hbqx9t3c92jqfdzamz24.jpg"} imgb={'https://res.cloudinary.com/raj4485cloud/image/upload/v1684917898/r8qhylm9vthnwjcatlpm.jpg'}/>



 
</div>



 </div>


 <div className='nichewaladivGallery'>
      


      <div><Cardforgallery img={'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/10/31162624/Featured-Inside-125-1600x900.jpeg'} /></div>
      <div><Cardforgallery img={'https://www.euractiv.com/wp-content/uploads/sites/2/2022/06/shutterstock_320588870-800x450.jpg'} /></div>
      <div><Cardforgallery  img={'https://images.indianexpress.com/2022/02/ayurveda.jpg'}/></div>
      <div><Cardforgallery img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdM6kQ15IOr0s_HOzIEAXTNgo48rw929FfrA&usqp=CAU'} /></div>
      {/* <div><Cardforgallery /></div>
      <div><Cardforgallery /></div>
      <div><Cardforgallery /></div>
      <div><Cardforgallery /></div> */}


      
</div>

<div>
  <Mapcomp/>
</div>

    </>
  );
}



const itemData = [
  {
    img: 'https://res.cloudinary.com/raj4485cloud/image/upload/v1684917789/hbqx9t3c92jqfdzamz24.jpg',
    title: 'Vedarambh 2023',
    author: '@JivanAmrit.com',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://res.cloudinary.com/raj4485cloud/image/upload/v1684917898/r8qhylm9vthnwjcatlpm.jpg',
    title: 'Vedarambh 2023',
    author: '@JivanAmrit.com',
  },
  {
    img: 'https://res.cloudinary.com/raj4485cloud/image/upload/v1684917960/rspo4sdqgtmkmrttolzv.jpg',
    title: 'Vedarambh 2023',
    author: '@JivanAmrit.com',
  },
  {
    img: 'https://res.cloudinary.com/raj4485cloud/image/upload/v1684918038/awd7rshvgrcmlqq0tyyx.jpg',
    title:'Vedarambh 2022',
    author: '@JivanAmrit.com',
    cols: 2,
  },
  {
    img: 'https://res.cloudinary.com/raj4485cloud/image/upload/v1684918088/ykjorouysmrybz5gxcfp.jpg',
    title: 'Vedarambh 2023',
    author: '@JivanAmrit.com',
    cols: 2,
  },
  {
    img: 'https://res.cloudinary.com/raj4485cloud/image/upload/v1684918148/td6j9u0idmtoipklz3j4.jpg',
    title: 'Vedarambh 2022',
    author: '@JivanAmrit.com',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://res.cloudinary.com/raj4485cloud/image/upload/v1684918238/wry5bmsxvdwxvlmqt4df.jpg',
    title: 'Vedarambh 2023',
    author: '@JivanAmrit.com',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@JivanAmrit.com',
  },
  {
    img: 'https://res.cloudinary.com/raj4485cloud/image/upload/v1684918289/m0h3uw0fhpgnxqqliiww.jpg',
    title: 'jivan Mantras',
    author: '@JivanAmrit.com',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://res.cloudinary.com/raj4485cloud/image/upload/v1684918347/t0qqdckvhoq0p94ir2tm.jpg',
    title: 'She/Her',
    author: '@JivanAmrit.com',
  },
  {
    img: 'https://res.cloudinary.com/raj4485cloud/image/upload/v1684918404/rhbgwakf90xhnn9akqan.jpg',
    title: 'jivan Mantras',
    author: '@JivanAmrit.com',
  },
  {
    img: 'https://res.cloudinary.com/raj4485cloud/image/upload/v1684918767/wftb4xnztqirdqcrj7gj.jpg',
    title: 'jivan Mantras',
    author: '@JivanAmrit.com',
    cols: 2,
  },
];
