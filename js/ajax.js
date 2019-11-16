$(function() {
    $('button').on('click', function() {
        var url="https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+flowers&image_type=photo&pretty=true";
        $.ajax({
            datatype: 'json',
            url:url,
            success: function(data){
                var result ="";
                data.hits.forEach(element => {
                    result+=`
                        <div class="card shadow-lg">
                            <div class="card-header">
                            <img src="${element.largeImageURL}" style="border-radius:50%" width="50" height="50">
                            ${element.user}
                            <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal${element.id}">Add New</button>
                        </div>
                        <!-- Modal body -->
                        <div class="modal-body">
                        <img src="${element.largeImageURL}" class="img-fluid">
                        </div>
                          <div class="modal fade" id="myModal${element.id}">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                <img src="${element.largeImageURL}" style="border-radius:50%" width="50" height="50">&nbsp
                                ${element.user}
                                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                
                                <div class="modal-body">
                                <img src="${element.largeImageURL}" class="img-fluid">
                                </div>
                                
                                <div class="modal-footer">
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item ">Love<i class="material-icons text-primary float-right ">favorite</i></li>
                                <li class="list-group-item ">Second <i class="material-icons text-danger float-right ">send</i></li>
                                <li class="list-group-item">Add tach<i class="material-icons text-success float-right ">attachment</i></li>
                                <li class="list-group-item">Fourth <i class="material-icons text-warning float-right ">call</i></li>
                              </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                            </div>
                        </div>
                    `;
                });
                $('#result').append(result);
            }
        });
    });
});