import React from "react";
import './Feedback.css';
const feedback = () => {

    return <>
        {/* <NavigateBlack /> */}

        <div class="container mt-5">
            <div className="feedback-heading mb-3">
                <h3>Complaints and Reviews</h3>
            </div>
            <div className="card p-4">
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
                <div className="card-comment "> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </div>
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
                    <img className="" style={{ width: "25px", height: "25px", marginInline: '30px' }} src="https://cdn-icons-png.flaticon.com/512/3925/3925149.png" />
                    <img className="rounded-circle" style={{ width: "25px", height: "25px" }} src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" />

                </div>
            </div>

        </div>

    </>



}
export default feedback;