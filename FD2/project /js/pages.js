const HomePage = {
   id: "main",
   title: "Planetarium",
   render: (className = "container", ...rest) => {
     return `
       <div class="main ${className}" id="main">
       <div class="main__search">
         <div class="main__search-title">Search</div>
         <div class="input-section">
           <label for="title" class="labelStyle">Title</label>
           <div class="outSelectDiv"><input type="text" name="" id="title" class="inputStyle" placeholder="Enter Title"/></div>
         </div>
         <div class="input-section">
           <label for="type" class="labelStyle labelStyle-type">Type</label>
           <div class="outSelectDiv">
             <select name="" id="type" class="selectStyle soundEffect">
               <option value="movie" id="optionMovie">Movie</option>
               <option value="series" id="optionSeries">Series</option>
             </select>
           </div>
         </div>
         <div class="block__btn">
           <button class="btn soundEffect" id="btn">Search</button>
         </div>
       </div>
       <div class="main__result">
         <div class="main__result-films" id="headerFilms">Movies:</div>
         <div class="movieListUpper" id="movieListUpper"></div>
         <div class="paginator" id="paginator"></div>
       </div>
       <div class="movieViewBackground movieViewClose" id="movieViewBackground">
         <div class="movieView movieViewClose" id="movieView"></div>
         <button class="movieViewBtn" id="movieViewBtn">Close</button>
       </div> 
     </div>
     `;
   }
 };
 const Login = {
  id: "login",
  title: "Login",
  render: (className = "container", ...rest) => {
    return `
      <section class="${className}">
        <div class="login">
        <div class="login__title">Register</div>
        <div class="login__subtitle">Please fill in this form to create an account</div>
        <label class="label-name">Name</label> 
        <input class="input-name" type="text" placeholder="Enter name" name="name" id="userName" required>
        <label class="label-email" for="email">Email</label> 
        <input class="input-email" type="text" placeholder="Enter Email" name="email" id="email" required>
        <label class="label-password">Password</label> 
        <input class="input-password" type="password" placeholder="password" name="psw" id="psw" required>
        <button class="login__btn soundEffect" id='submitData' name='submitData' type='button'>Register</button>
        </div>
      </section>
    `;
  }
};
 const Contacts = {
   id: "contacts",
   title: "Contacts",
   render: (className = "container", ...rest) => {
     return `
       <section class="${className}">

       </section>
     `;
   }
 };
 const ErrorPage = {
   id: "error",
   title: "Achtung, warning, kujdes, attenzione, pozornost...",
   render: (className = "container", ...rest) => {
     return `
       <section class="${className}">
       <canvas id='canvi'></canvas>
         <h1>Ошибка 404</h1>
         <p>Страница не найдена, попробуйте вернуться на <a href="#main">главную</a>.</p>
       </section>
     `;
   }
 };
