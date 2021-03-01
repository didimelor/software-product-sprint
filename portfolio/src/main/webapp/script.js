// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() 
    {
        const greetings = ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

        // Pick a random greeting.
        const greeting = greetings[Math.floor(Math.random() * greetings.length)];

        // Add it to the page.
        const greetingContainer = document.getElementById('greeting-container');
        greetingContainer.innerText = greeting;
    }

    function randomFactAboutMe()
    {
        const myFacts = ['My first word as a baby was Tacos', 'My favorite food is avocado toast', 'I love to speak french', 'My favorite T.V. show is MasterChef', 'I live in Mexico City','My favorite drink is iced latte','My favorite sport is Baskteball','I love going to concerts', 'I like to sing'];
        const theFact = myFacts[Math.floor(Math.random() * myFacts.length)];
        const randomFact = document.getElementById('random-fact').innerText = theFact;
    }

    function typeWriter()
    {
        if (i < txt.length) 
        {
            document.getElementById("myPortfolio").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    var txt = "My Portfolio Diana Melo";
    var i = 0;
    var speed = 120;