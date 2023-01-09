import React from "react";
import './Feedback.css';
import Sidebar from "../Sidebar/sidebar";
import {toast,Toaster} from "react-hot-toast";
// review and reply complaints//

const feedback = () => {

    function formSubmit(){
toast.success("form submitted");
window.location.replace("/admin/dashboard");
    }

    return <>

        <Sidebar />
        <div class="container mt-5 mb-3 ">
            <div id="feedbacktitle" className="feedback-heading mb-3">
                <h3>Complaints and Reviews</h3>
            </div>
            <div id="feedcard" className="feedback card col-md-9 p-3">
                <div className="card-title">
                    <div className="card__image">
                        <img className="rounded-circle w-100" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" />
                    </div>
                    <div className="">
                        <div className="card__info ">
                            <h4>Maria Smant</h4>
                            <p>26 Dec 2022</p>
                        </div>



                    </div>

                </div>
                <div className="card-comment "> It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout.e distracted by the readable content of a page when looking at
                    its layout.It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout.  </div>
                <div class="d-flex flex-start mt-4">
                    <a class="me-3" href="#">
                        <img class="rounded-circle shadow-1-strong"
                            src="https://i.natgeofe.com/n/7fef9761-077c-45d0-9cca-78a984b9d614/burmese-python_thumb_3x2.jpg" alt="avatar"
                            width="60" height="60" />
                    </a>
                    <div class="flex-grow-1 flex-shrink-1">
                        <div>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="mb-1">
                                    Admin <span class="small">- 3 hours ago</span>
                                </p>
                            </div>
                            <p class="small mb-0">
                                letters, as opposed to using 'Content here, content here',
                                making it look like readable English.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="forward d-flex justify-content-end">

                    <button type="button" class="btn btn-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="https://cdn-icons-png.flaticon.com/512/3925/3925149.png" width={"30px"}></img>
                    </button>


                    <button type="button" class="btn btn-white">
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" width={"30px"}></img>
                    </button>


                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Message</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Enter your message here.
                            <textarea id="textareaID" class="form-control"></textarea>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-success" onClick={formSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Toaster/>

    </>



}
export default feedback;