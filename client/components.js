Vue.component('', {
  template: '<li>This is a todo</li>'
})

Vue.component('login', {
  template: `<div class="container">
    <div class="row">
      <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="exampleInputFile">File input</label>
        <input type="file" id="exampleInputFile">
        <p class="help-block">Example block-level help text here.</p>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox"> Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
    </div>
  </div>`
})

Vue.component('navbar', {
  template: `<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">MoonTrash</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
      <ul class="nav navbar-nav">
        <li class=""><a href="#"><span class="sr-only">(current)</span></a></li>
        <li><a href="#"></a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"></a></li>
      </ul>
    </div>
  </div>
</nav>`
})

Vue.component('upload', {
  template: `
  <div class="row">
      <hr style="margin-bottom:25px;" />
      <div class="col-sm-12" style="margin-bottom:20px;">
          <label class="btn-bs-file btn btn-lg btn-primary">
              Yup !
              <input type="file" />
          </label>
      </div>
    </div>
  `
})

Vue.component('upload-coba', {
  template : `
  <div class="row">
    <span class="btn btn-default btn-file">
      Browse <input type="file">
    </span>
  </div>
  `
})

Vue.component('upload-coba2', {
  template : `
  <div class="col-md-6">
      <div class="form-group">
          <label>Upload Image</label>
          <div class="input-group">
              <span class="input-group-btn">
                  <span class="btn btn-default btn-file">
                      Browse… <input type="file" id="imgInp">
                  </span>
              </span>
              <input type="text" class="form-control" readonly>
          </div>
          <img id='img-upload'/>
      </div>
  </div>
  `
})
