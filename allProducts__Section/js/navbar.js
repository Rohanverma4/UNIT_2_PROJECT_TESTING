var navbarSection = `
<a href="../HOMEPAGE_CAROUSEL/first_page.html"><img
    src="https://www.pulseplus.in/content/images/icons/logo-pulse-pharmacy-trans.png"
/></a>
<ul>
    <li>
        <button id="myBtn">
            <i
                style="
                    font-size: 15px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    margin-left: 5px; ;
                "
                class="material-icons"
                >location_on</i
            ><span
                style="position: absolute; right: 0; top: 0; margin-right: 5px"
                >Location</span
            >
        </button>

        <!-- The Modal -->
        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>Modal Header</h2>
                </div>
                <div class="modal-body">
                    <form id="modalForm">
                        <input type="text" placeholder="Enter your city" />
                        <label for="nd">
                            <input
                                id="nd"
                                type="radio"
                                name="location"
                                value="New Delhi"
                            />
                            New Delhi
                        </label>

                        <label for="mumbai">
                            <input
                                id="mumbai"
                                type="radio"
                                name="location"
                                value="Mumbai"
                            />
                            Mumbai
                        </label>

                        <label for="bengaluru">
                            <input
                                id="bengaluru"
                                type="radio"
                                name="location"
                                value="Bengaluru"
                            />
                            Bengaluru
                        </label>

                        <label for="kolkata">
                            <input
                                id="kolkata"
                                type="radio"
                                name="location"
                                value="Kolkata"
                            />
                            Kolkata
                        </label>

                        <label for="chennai">
                            <input
                                d="chennai"
                                type="radio"
                                name="location"
                                value="Chennai"
                            />
                            Chennai
                        </label>

                        <label for="noida">
                            <input
                                id="noida"
                                type="radio"
                                name="location"
                                value="Noida"
                            />
                            Noida
                        </label>

                        <label for="pune">
                            <input
                                id="pune"
                                type="radio"
                                name="location"
                                value="Pune"
                            />
                            Pune
                        </label>

                        <label for="hyderabad">
                            <input
                                id="hyderabad"
                                type="radio"
                                name="location"
                                value="Hyderabad"
                            />
                            Hyderabad
                        </label>

                        <input type="submit" id="applyModalLocation" value="Apply" />
                    </form>
                </div>
                <div class="modal-footer">
                    <h3>Modal Footer</h3>
                </div>
            </div>
        </div>
    </li>
    <li id="loginSignupHref">
        <a href="../login.html/login.html">Login/Signup</a>
    </li>

    <li>
        <a id="cartAnchor" href="#">
            <span id="cartCounter">0</span>
            <i id="cartIcon" class="material-icons">shopping_bag</i>
        </a>
    </li>
</ul>`;


// var navbar = document.querySelector(".navbar");
// navbar.innerHTML = navbarSection;