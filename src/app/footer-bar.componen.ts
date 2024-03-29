import { Component,Input } from '@angular/core';

@Component({
    selector: 'footer-bar',
    template: `
   <div class="well hoverwell thumbnail">
        <h3>{{event.name}}</h3>
        <div>Date:{{event.date}}</div>
        <div>Time:{{event.time}}</div>
        <div>Price:\${{event.price}}</div>
        <div>ImageUrl:{{event.imageUrl}}</div>
        <div>
        <span>Location:{{event.location.address}}</span>  
      
        <span class="pad-left">{{event.location.city}},{{event.location.country}}</span>
        </div>
        
    </div> 
     <!-- Modal -->
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Login or Register here!</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                
                                                <div class="row">
                                                    <div class="col-md-8" style="border-right: 1px dotted #c2c2c2; padding-right: 30px">
                                                        <!-- Nav tabs -->
                                                            <ul class="nav nav-tabs">
                                                                <li class="active">
                                                                        <a href="#Login" data-toggle="tab">Login</a>
                            </li>
                            <li>
                                <a href="#Registration" data-toggle="tab">Registration</a>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div class="tab-pane active" id="Login">
                                <form role="form" class="form-horizontal">
                                    <div class="form-group">
                                        <label for="email" class="col-sm-2 control-label">
                                                              Email</label
                                                            >
                                                            <div class="col-sm-10">
                                                              <input
                                                                type="email"
                                                                class="form-control"
                                                                id="email1"
                                                                placeholder="Email"
                                                              />
                                                            </div>
                                                          </div>
                                                          <div class="form-group">
                                                            <label
                                                              for="exampleInputPassword1"
                                                              class="col-sm-2 control-label"
                                                            >
                                                              Password</label
                                                            >
                                                            <div class="col-sm-10">
                                                              <input
                                                                type="email"
                                                                class="form-control"
                                                                id="exampleInputPassword1"
                                                                placeholder="Email"
                                                              />
                                                            </div>
                                                          </div>
                                                          <div class="row">
                                                            <div class="col-sm-2"></div>
                                                            <div class="col-sm-10">
                                                              <button type="submit" class="btn btn-primary btn-sm">
                                                                Submit
                                                              </button>
                                                              <a href="javascript:;">Forgot your password?</a>
                                                            </div>
                                                          </div>
                                                        </form>
                                                      </div>
                                                      <div class="tab-pane" id="Registration">
                                                        <form role="form" class="form-horizontal">
                                                          <div class="form-group">
                                                            <label for="email" class="col-sm-2 control-label">
                                                              Name</label
                                                            >
                                                            <div class="col-sm-10">
                                                              <div class="row">
                                                                <div class="col-md-3">
                                                                  <select class="form-control">
                                                                    <option>Mr.</option>
                                                                    <option>Ms.</option>
                                                                    <option>Mrs.</option>
                                                                  </select>
                                                                </div>
                                                                <div class="col-md-9">
                                                                  <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    placeholder="Name"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="form-group">
                                                            <label for="email" class="col-sm-2 control-label">
                                                              Email</label
                                                            >
                                                            <div class="col-sm-10">
                                                              <input
                                                                type="email"
                                                                class="form-control"
                                                                id="email"
                                                                placeholder="Email"
                                                              />
                                                            </div>
                                                          </div>
                                                          <div class="form-group">
                                                            <label for="mobile" class="col-sm-2 control-label">
                                                              Mobile</label
                                                            >
                                                            <div class="col-sm-10">
                                                              <input
                                                                type="email"
                                                                class="form-control"
                                                                id="mobile"
                                                                placeholder="Mobile"
                                                              />
                                                            </div>
                                                          </div>
                                                          <div class="form-group">
                                                            <label for="password" class="col-sm-2 control-label">
                                                              Password</label
                                                            >
                                                            <div class="col-sm-10">
                                                              <input
                                                                type="password"
                                                                class="form-control"
                                                                id="password"
                                                                placeholder="Password"
                                                              />
                                                            </div>
                                                          </div>
                                                          <div class="row">
                                                            <div class="col-sm-2"></div>
                                                            <div class="col-sm-10">
                                                              <button type="button" class="btn btn-primary btn-sm">
                                                                Save & Continue
                                                              </button>
                                                              <button type="button" class="btn btn-default btn-sm">
                                                                Cancel
                                                              </button>
                                                            </div>
                                                          </div>
                                                        </form>
                                                      </div>
                                                    </div>
                                                    <div id="OR" class="hidden-xs">OR</div>
                                                  </div>
                                                  <div class="col-md-4">
                                                    <div class="row text-center sign-with">
                                                      <div class="col-md-12">
                                                        <h3>Sign in with</h3>
                                                      </div>
                                                      <div class="col-md-12">
                                                        <div class="btn-group btn-group-justified">
                                                          <a href="#" class="btn btn-primary">Facebook</a>
                                                          <a href="#" class="btn btn-danger"> Google</a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                    


                                        </div>
                                                  

                                                    
                    
            
            
           `,
    styleUrls: ['./app.component.css']
  })
  export class FooterBarComponent {
    title = 'fundi-baze';
    @Input() event:any
  }