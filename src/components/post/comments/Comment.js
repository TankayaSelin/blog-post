import React from 'react';
import ReplyIcon from '@material-ui/icons/Reply';

const Comment = props =>{
    return(
        <div class="row my-3">
                    <div className="col-3">
                      <div class="media">
                        <img
                          class="mr-3 images"
                          alt="Bootstrap Media Preview"
                          src="https://i.imgur.com/stD0Q19.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-9" style={{paddingLeft: 0}}>
                      <div class="media-body">
                        <div class="row">
                          <div class="col-12 d-flex align-items-center pb-3">
                            <h5 className="m-0">{props.data.email}</h5>
                            <span className='pt-1 px-1'>-2 hours ago</span>
                          </div>
                        </div>
                        <p className="lineClamp3">
                        {props.data.body}
                        </p>
                      </div>
                      <ReplyIcon style={{color: 'green', cursor: 'pointer'}}/>
                      <span style={{fontSize: '12px'}}>Reply</span>
                    </div>
                  </div>
    )
}

export default Comment;