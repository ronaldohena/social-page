import React, { Component } from 'react';
import { follow } from './apiUser';

class FollowPrifileButton extends Component {
    followClick = () =>{
        this.props.onButtonClick(follow)
    }


    render () {
        return (
            <div className="d-inline-block">
                {!this.props.following ? (
                        <button onClick={this.followClick} className="btn btn-success btn-raised mt-5 mr-3">
                            Follow
                        </button>
                    ) : (
                        <button className="btn btn-warning btn-raised mt-5 mr-3">
                            Unfollow
                        </button>
                    )
                }
            </div>
        )
    }
}

export default FollowPrifileButton;