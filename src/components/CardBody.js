const  makeDiv=(curr)=>{
    const {
      _id,
      course_category,
      course_title,
      creator_name,
      creator_youtube_link,
      creator_image,
      course_image,
      description,
    } = curr;
  
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    cardBodyDiv.setAttribute('key', _id);
  
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-div');
    const img = document.createElement('img');
    img.src = course_image;
    img.alt = course_title;
    imgDiv.appendChild(img);
  
    const creatorDiv = document.createElement('div');
    creatorDiv.classList.add('creator-div');
    const creatorImg = document.createElement('img');
    creatorImg.src = creator_image;
    creatorImg.alt = creator_name;
    const creatorDetailsDiv = document.createElement('div');
    const courseTitleP = document.createElement('p');
    courseTitleP.textContent = course_title;
    const creatorNameH6 = document.createElement('h6');
    creatorNameH6.textContent = creator_name;
    creatorDetailsDiv.appendChild(courseTitleP);
    creatorDetailsDiv.appendChild(creatorNameH6);
    creatorDiv.appendChild(creatorImg);
    creatorDiv.appendChild(creatorDetailsDiv);
  
    const btnContDiv = document.createElement('div');
    btnContDiv.classList.add('btn-cont');
    const watchNowLink = document.createElement('a');
    watchNowLink.href = creator_youtube_link;
    watchNowLink.target = '_blank';
    watchNowLink.rel = 'noopener noreferrer';
    watchNowLink.textContent = 'Watch now';
    const likeButton = document.createElement('button');
    likeButton.classList.add('btn');
    likeButton.setAttribute('data-id', _id);
    likeButton.textContent = '❤️';
  
    btnContDiv.appendChild(watchNowLink);
    btnContDiv.appendChild(likeButton);
  
    cardBodyDiv.appendChild(imgDiv);
    cardBodyDiv.appendChild(creatorDiv);
    cardBodyDiv.appendChild(btnContDiv);
  
    return cardBodyDiv;
  }
export default makeDiv;