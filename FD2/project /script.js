












// let button = document.querySelector(`#button`);
// let title = document.querySelector(`#title`);
// let type = document.querySelector(`#type`);
// let optionMovie = document.querySelector(`#optionMovie`);
// let optionSeries = document.querySelector(`#optionSeries`);
// let optionEpisode = document.querySelector(`#optionEpisode`);
// let arrowButtonLeft = ``;
// let arrowButtonRight = ``;

// let allPageList = 1;
// let countPageList = 0;
// let page = 1;
// let arrPaginatorUnit = [];
// let arrCardElements = [];
// let arrCardElementsView = [];
// let currentPaginatorUnit = ``;
// let result = ``;
// let resultHD = ``;

// function selectType(event) {
//   console.log(type.value);
//   if (optionMovie.value === event.target.value) {
//     console.log(`1`);
//     optionMovie.selected;
//   } else if (optionSeries.value === event.target.value) {
//     console.log(`2`);
//     optionSeries.selected;
//   } else if (optionEpisode.value === event.target.value) {
//     console.log(`3`);
//     optionEpisode.selected;
//   }
// }
// type.addEventListener(`change`, selectType);

// async function getLink() {
//   let url = `http://www.omdbapi.com/?s=${title.value}&type=${type.value}&page=${page}&apikey=8e813b2d`;
//   let response = await fetch(url, {
//     method: `GET`,
//   });
//   console.log(response); // status Response
//   result = await response.json();
//   console.log(result); // array 0-9 titles
//   return result;
// }

// async function searchTitleHD(event) {
//   if (event.target.innerHTML === `Details`) {
//     let url = `http://www.omdbapi.com/?i=${event.target.id}&apikey=8e813b2d`;
//     let response = await fetch(url, {
//       method: `GET`,
//     });
//     console.log(response); // status Response
//     resultHD = await response.json();
//     console.log(resultHD); // array 0-9 titles
//     createMovieViewCard();
//   }
// }
// document.addEventListener(`click`, searchTitleHD);

// async function searchTitle(event) {
//   await getLink();
//   if (result.Response === `False`) {
//     let resultNotFound = document.createElement(`h2`);
//     document.querySelector(`#headerFilms`).after(resultNotFound);
//     resultNotFound.innerHTML = `Movie not found!`;
//   } else {
//     allPageList = +result.totalResults;
//     console.log(allPageList);
//     arrPageMovie = result.Search;
//     await createTitleList();
//     createPaginator();
//   }
// }
// button.addEventListener(`click`, searchTitle);

// function createPaginator(params) {
//   arrowButtonLeft = document.createElement(`button`);
//   arrowButtonLeft.className = `paginatorUnit`;
//   arrowButtonLeft.innerHTML = `&larr;`;
//   document.querySelector(`#paginator`).appendChild(arrowButtonLeft);
//   if (allPageList <= 100) {
//     for (let i = 0; i < Math.ceil(allPageList / 10); i++) {
//       let buttonPaginator = document.createElement(`button`);
//       buttonPaginator.className = `paginatorUnit`;
//       buttonPaginator.innerHTML = i + 1;
//       buttonPaginator.disabled = i === page - 1 ? true : false; // first disable button
//       document.querySelector(`#paginator`).appendChild(buttonPaginator);
//       arrPaginatorUnit.push(buttonPaginator); // array of buttons
//     }
//   } else {
//     for (let i = 0; i < 10; i++) {
//       let buttonPaginator = document.createElement(`button`);
//       buttonPaginator.className = `paginatorUnit`;
//       buttonPaginator.innerHTML = i + 1;
//       buttonPaginator.disabled = i === page - 1 ? true : false; // first disable button
//       document.querySelector(`#paginator`).appendChild(buttonPaginator);
//       arrPaginatorUnit.push(buttonPaginator); // array of buttons
//     }
//   }
//   arrowButtonRight = document.createElement(`button`);
//   arrowButtonRight.className = `paginatorUnit`;
//   arrowButtonRight.innerHTML = `&rarr;`;
//   document.querySelector(`#paginator`).appendChild(arrowButtonRight);
// }

// async function createTitleList(params) {
//   for (let i = 0; i < result.Search.length; i++) {
//     let cardMovie = document.createElement(`div`);
//     cardMovie.className = `cardMovie`;
//     document.querySelector(`#movieListUpper`).appendChild(cardMovie);
//     arrCardElements.push(cardMovie); // array of cardElements
//     let innerContentCard = document.createElement(`div`);
//     innerContentCard.className = `innerContentCard`;
//     cardMovie.appendChild(innerContentCard);
//     arrCardElements.push(innerContentCard); // array of cardElements
//     let imgPoster = document.createElement(`img`);
//     imgPoster.className = `imgPoster`;
//     imgPoster.src = result.Search[i].Poster;
//     innerContentCard.appendChild(imgPoster);
//     arrCardElements.push(imgPoster); // array of cardElements
//     let rightContentCard = document.createElement(`div`);
//     rightContentCard.className = `rightContentCard`;
//     innerContentCard.appendChild(rightContentCard);
//     arrCardElements.push(rightContentCard); // array of cardElements
//     let typeTitle = document.createElement(`span`);
//     typeTitle.className = `typeTitle`;
//     rightContentCard.appendChild(typeTitle);
//     typeTitle.innerHTML = result.Search[i].Type;
//     arrCardElements.push(typeTitle); // array of cardElements
//     let nameTitle = document.createElement(`span`);
//     nameTitle.className = `nameTitle`;
//     rightContentCard.appendChild(nameTitle);
//     nameTitle.innerHTML = result.Search[i].Title;
//     arrCardElements.push(nameTitle); // array of cardElements
//     let yearTitle = document.createElement(`span`);
//     yearTitle.className = `yearTitle`;
//     rightContentCard.appendChild(yearTitle);
//     yearTitle.innerHTML = result.Search[i].Year;
//     arrCardElements.push(yearTitle); // array of cardElements
//     let buttonDetails = document.createElement(`button`);
//     buttonDetails.className = `buttonDetails`;
//     rightContentCard.appendChild(buttonDetails);
//     buttonDetails.innerHTML = `Details`;
//     buttonDetails.id = result.Search[i].imdbID;
//     arrCardElements.push(buttonDetails); // array of cardElements
//   }
// }

// function createMovieViewCard(params) {
//   document.querySelector(`#movieView`).style.borderStyle = `groove`;
//   for (let i = 0; i < arrCardElementsView.length; i++) {
//     arrCardElementsView[i].remove();
//   }
//   let innerContentCard = document.createElement(`div`);
//   innerContentCard.className = `innerContentCard`;
//   document.querySelector(`#movieView`).appendChild(innerContentCard);
//   arrCardElementsView.push(innerContentCard); // array of cardElementsHD
//   let imgPosterHD = document.createElement(`img`);
//   imgPosterHD.className = `imgPosterHD`;
//   imgPosterHD.src = resultHD.Poster;
//   innerContentCard.appendChild(imgPosterHD);
//   arrCardElementsView.push(imgPosterHD); // array of cardElementsHD
//   let rightContentCard = document.createElement(`div`);
//   rightContentCard.className = `rightContentCard`;
//   innerContentCard.appendChild(rightContentCard);
//   arrCardElementsView.push(rightContentCard); // array of cardElementsHD
//   let spanContent = document.createElement(`div`);
//   spanContent.className = `spanContent`;
//   rightContentCard.appendChild(spanContent);
//   arrCardElementsView.push(spanContent); // array of cardElementsHD
//   let spanHD = document.createElement(`span`);
//   spanHD.className = `spanHD`;
//   spanContent.appendChild(spanHD);
//   spanHD.innerHTML = `Title:`;
//   arrCardElementsView.push(spanHD); // array of cardElementsHD
//   let infoTitle = document.createElement(`span`);
//   infoTitle.className = `infoTitle`;
//   spanContent.appendChild(infoTitle);
//   infoTitle.innerHTML = resultHD.Title;
//   arrCardElementsView.push(infoTitle); // array of cardElementsHD
//   let spanContent1 = document.createElement(`div`);
//   spanContent1.className = `spanContent`;
//   rightContentCard.appendChild(spanContent1);
//   arrCardElementsView.push(spanContent1); // array of cardElementsHD
//   let spanHD1 = document.createElement(`span`);
//   spanHD1.className = `spanHD`;
//   spanContent1.appendChild(spanHD1);
//   spanHD1.innerHTML = `Released:`;
//   arrCardElementsView.push(spanHD1); // array of cardElementsHD
//   let infoTitle1 = document.createElement(`span`);
//   infoTitle1.className = `infoTitle`;
//   spanContent1.appendChild(infoTitle1);
//   infoTitle1.innerHTML = resultHD.Released;
//   arrCardElementsView.push(infoTitle1); // array of cardElementsHD
//   let spanContent2 = document.createElement(`div`);
//   spanContent2.className = `spanContent`;
//   rightContentCard.appendChild(spanContent2);
//   arrCardElementsView.push(spanContent2); // array of cardElementsHD
//   let spanHD2 = document.createElement(`span`);
//   spanHD2.className = `spanHD`;
//   spanContent2.appendChild(spanHD2);
//   spanHD2.innerHTML = `Genre:`;
//   arrCardElementsView.push(spanHD2); // array of cardElementsHD
//   let infoTitle2 = document.createElement(`span`);
//   infoTitle2.className = `infoTitle`;
//   spanContent2.appendChild(infoTitle2);
//   infoTitle2.innerHTML = resultHD.Genre;
//   arrCardElementsView.push(infoTitle2); // array of cardElementsHD
//   let spanContent3 = document.createElement(`div`);
//   spanContent3.className = `spanContent`;
//   rightContentCard.appendChild(spanContent3);
//   arrCardElementsView.push(spanContent3); // array of cardElementsHD
//   let spanHD3 = document.createElement(`span`);
//   spanHD3.className = `spanHD`;
//   spanContent3.appendChild(spanHD3);
//   spanHD3.innerHTML = `Country:`;
//   arrCardElementsView.push(spanHD3); // array of cardElementsHD
//   let infoTitle3 = document.createElement(`span`);
//   infoTitle3.className = `infoTitle`;
//   spanContent3.appendChild(infoTitle3);
//   infoTitle3.innerHTML = resultHD.Country;
//   arrCardElementsView.push(infoTitle3); // array of cardElementsHD
//   let spanContent4 = document.createElement(`div`);
//   spanContent4.className = `spanContent`;
//   rightContentCard.appendChild(spanContent4);
//   arrCardElementsView.push(spanContent4); // array of cardElementsHD
//   let spanHD4 = document.createElement(`span`);
//   spanHD4.className = `spanHD`;
//   spanContent4.appendChild(spanHD4);
//   spanHD4.innerHTML = `Director:`;
//   arrCardElementsView.push(spanHD4); // array of cardElementsHD
//   let infoTitle4 = document.createElement(`span`);
//   infoTitle4.className = `infoTitle`;
//   spanContent4.appendChild(infoTitle4);
//   infoTitle4.innerHTML = resultHD.Director;
//   arrCardElementsView.push(infoTitle4); // array of cardElementsHD
//   let spanContent5 = document.createElement(`div`);
//   spanContent5.className = `spanContent`;
//   rightContentCard.appendChild(spanContent5);
//   arrCardElementsView.push(spanContent5); // array of cardElementsHD
//   let spanHD5 = document.createElement(`span`);
//   spanHD5.className = `spanHD`;
//   spanContent5.appendChild(spanHD5);
//   spanHD5.innerHTML = `Writer:`;
//   arrCardElementsView.push(spanHD5); // array of cardElementsHD
//   let infoTitle5 = document.createElement(`span`);
//   infoTitle5.className = `infoTitle`;
//   spanContent5.appendChild(infoTitle5);
//   infoTitle5.innerHTML = resultHD.Writer;
//   arrCardElementsView.push(infoTitle5); // array of cardElementsHD
//   let spanContent6 = document.createElement(`div`);
//   spanContent6.className = `spanContent`;
//   rightContentCard.appendChild(spanContent6);
//   arrCardElementsView.push(spanContent6); // array of cardElementsHD
//   let spanHD6 = document.createElement(`span`);
//   spanHD6.className = `spanHD`;
//   spanContent6.appendChild(spanHD6);
//   spanHD6.innerHTML = `Actors:`;
//   arrCardElementsView.push(spanHD6); // array of cardElementsHD
//   let infoTitle6 = document.createElement(`span`);
//   infoTitle6.className = `infoTitle`;
//   spanContent6.appendChild(infoTitle6);
//   infoTitle6.innerHTML = resultHD.Actors;
//   arrCardElementsView.push(infoTitle6); // array of cardElementsHD
//   let spanContent7 = document.createElement(`div`);
//   spanContent7.className = `spanContent`;
//   rightContentCard.appendChild(spanContent7);
//   arrCardElementsView.push(spanContent7); // array of cardElementsHD
//   let spanHD7 = document.createElement(`span`);
//   spanHD7.className = `spanHD`;
//   spanContent7.appendChild(spanHD7);
//   spanHD7.innerHTML = `Awards:`;
//   arrCardElementsView.push(spanHD7); // array of cardElementsHD
//   let infoTitle7 = document.createElement(`span`);
//   infoTitle7.className = `infoTitle`;
//   spanContent7.appendChild(infoTitle7);
//   infoTitle7.innerHTML = resultHD.Awards;
//   arrCardElementsView.push(infoTitle7); // array of cardElementsHD
// }

// async function deleteTitleList(params) {
//   for (let i = 0; i < arrCardElements.length; i++) {
//     arrCardElements[i].remove();
//   }
//   arrCardElements = [];
// }

// async function changeNumberPage(event) {
//   if (event.target !== arrowButtonLeft && event.target !== arrowButtonRight) {
//     page = +event.target.innerHTML;
//     console.log(page);
//     await getLink();
//     await deleteTitleList();
//     await createTitleList();
//     currentPaginatorUnit = event.target;
//     for (let i = 0; i < arrPaginatorUnit.length; i++) {
//       arrPaginatorUnit[i].disabled = false;
//     }
//     currentPaginatorUnit.disabled = true;
//   }
// }
// document.querySelector(`#paginator`).addEventListener(`click`, changeNumberPage);

// async function jumpNumberPage(event) {
//   if (event.target === arrowButtonLeft && page % 10 !== 1) {
//     console.log(`left`);
//     for (let i = 0; i < arrPaginatorUnit.length; i++) {
//       if (arrPaginatorUnit[i].disabled === true) {
//         currentPaginatorUnit = arrPaginatorUnit[i];
//       }
//     }
//     page--;
//     for (let i = 0; i < arrPaginatorUnit.length; i++) {
//       arrPaginatorUnit[i].disabled = false;
//     }
//     currentPaginatorUnit.previousSibling.disabled = true;
//     currentPaginatorUnit.disabled = false;
//     currentPaginatorUnit = currentPaginatorUnit.previousSibling;
//     await getLink();
//     await deleteTitleList();
//     await createTitleList();
//   } else if (event.target === arrowButtonLeft && page % 10 === 1 && page !== 1) {
//     console.log(`leftUpdate`);
//     for (let i = 0; i < arrPaginatorUnit.length; i++) {
//       arrPaginatorUnit[i].remove();
//     }
//     arrPaginatorUnit = [];
//     countPageList--;
//     page--;
//     await getLink();
//     await deleteTitleList();
//     await createTitleList();
//     console.log(`1-left`);
//     for (let i = countPageList * 10 + 1; i <= countPageList * 10 + 10; i++) {
//       let buttonPaginator = document.createElement(`button`);
//       buttonPaginator.className = `paginatorUnit`;
//       buttonPaginator.innerHTML = i;
//       buttonPaginator.disabled = i === countPageList * 10 + 10 ? true : false; // first disable button
//       arrowButtonRight.before(buttonPaginator);
//       arrPaginatorUnit.push(buttonPaginator); // array of buttons
//     }
//   }
//   if (event.target === arrowButtonRight && page !== Math.ceil(allPageList / 10) && page % 10 !== 0) {
//     console.log(`right`);
//     for (let i = 0; i < arrPaginatorUnit.length; i++) {
//       if (arrPaginatorUnit[i].disabled === true) {
//         currentPaginatorUnit = arrPaginatorUnit[i];
//       }
//     }
//     page++;
//     for (let i = 0; i < arrPaginatorUnit.length; i++) {
//       arrPaginatorUnit[i].disabled = false;
//     }
//     currentPaginatorUnit.nextSibling.disabled = true;
//     currentPaginatorUnit.disabled = false;
//     currentPaginatorUnit = currentPaginatorUnit.nextSibling;
//     await getLink();
//     await deleteTitleList();
//     await createTitleList();
//   } else if (arrowButtonRight === event.target && page % 10 === 0) {
//     console.log(`rightUpdate`);
//     for (let i = 0; i < arrPaginatorUnit.length; i++) {
//       arrPaginatorUnit[i].remove();
//     }
//     arrPaginatorUnit = [];
//     countPageList++;
//     page++;
//     await getLink();
//     await deleteTitleList();
//     await createTitleList();
//     if (countPageList === Math.floor(allPageList / 100)) {
//       console.log(`1`);
//       for (let i = countPageList * 10 + 1; i <= Math.ceil(allPageList / 10); i++) {
//         let buttonPaginator = document.createElement(`button`);
//         buttonPaginator.className = `paginatorUnit`;
//         buttonPaginator.innerHTML = i;
//         buttonPaginator.disabled = i === page ? true : false; // first disable button
//         arrowButtonRight.before(buttonPaginator);
//         arrPaginatorUnit.push(buttonPaginator); // array of buttons
//       }
//     } else if (countPageList < Math.floor(allPageList / 100)) {
//       console.log(`2`);
//       for (let i = countPageList * 10 + 1; i < countPageList * 10 + 11; i++) {
//         let buttonPaginator = document.createElement(`button`);
//         buttonPaginator.className = `paginatorUnit`;
//         buttonPaginator.innerHTML = i;
//         buttonPaginator.disabled = i === page ? true : false; // first disable button
//         arrowButtonRight.before(buttonPaginator);
//         arrPaginatorUnit.push(buttonPaginator); // array of buttons
//       }
//     }
//   }
// }
// document.querySelector(`#paginator`).addEventListener(`click`, jumpNumberPage);