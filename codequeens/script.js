// Lesson data
const lessons = [
    {
        title: "Lesson 1: What is HTML?",
        text: `
            HTML stands for HyperText Markup Language. It is the standard language for creating web pages.
            HTML is used to structure the content of a webpage, including text, images, and links.
            <br><br>
            Example of a simple paragraph:
            <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>
            <img src="images/image3.png" alt="HTML example image" style="width:100%; max-width:400px; height:auto;">

        `,
        gif: `
        <div style="width:100%;height:0;padding-bottom:90%;position:relative;">
            <iframe src="https://giphy.com/embed/xT9IgzoKnwFNmISR8I" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
    `
},
   
    {
        title: "Lesson 2: Basic Structure",
        text: `
            An HTML document starts with <code>&lt;!DOCTYPE html&gt;</code> and contains 
            <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> tags.
            <ul>
                <li><strong>&lt;!DOCTYPE html&gt;</strong>: Declares the document type as HTML5.</li>
                <li><strong>&lt;html&gt;</strong>: The root element that contains all other elements.</li>
                <li><strong>&lt;head&gt;</strong>: Contains meta information, title, and links to stylesheets.</li>
                <li><strong>&lt;body&gt;</strong>: Contains the visible content of the webpage.</li>
            </ul>
            <br>
            Example of a basic HTML structure:
                        <img src="images/image2.png" alt="HTML example image" style="width:100%; max-width:400px; height:auto;">

        `
    },
    {
        title: "Lesson 3: Headings",
        text: `
            Headings are defined with <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags.
            <ul>
                <li><strong>&lt;h1&gt;</strong>: Defines the largest heading.</li>
                <li><strong>&lt;h6&gt;</strong>: Defines the smallest heading.</li>
            </ul>
            Headings are important for structuring content and improving accessibility and SEO.
            <br><br>
            Example:
            <pre><code>&lt;h1&gt;This is a Heading&lt;/h1&gt;</code></pre>
                  <img src="images/image1.png" alt="HTML example image" style="width:100%; max-width:400px; height:auto;">
  `
    },
    {
        title: "Lesson 4: Paragraphs",
        text: `
            Paragraphs are defined with the <code>&lt;p&gt;</code> tag. It is used to create blocks of text.
            Each paragraph starts on a new line and adds space between blocks of text.
            <br><br>
            Example:
            <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>
                   <img src="images/image3.png" alt="HTML example image" style="width:100%; max-width:400px; height:auto;">
 `
    },
    {
        title: "Lesson 5: Links",
        text: `
            Links are created using the <code>&lt;a&gt;</code> tag. The <code>href</code> attribute specifies the URL of the link.
            <br><br>
            Example:
            <pre><code>&lt;a href="https://example.com"&gt;Click here&lt;/a&gt;</code></pre>
                                <img src="images/image4.png" alt="HTML example image" style="width:100%; max-width:400px; height:auto;">

                                `
    },
    {
        title: "Lesson 6: Images",
        text: `
            Images are added using the <code>&lt;img&gt;</code> tag. The <code>src</code> attribute specifies the path to the image,
            and the <code>alt</code> attribute provides alternative text for the image.
            <br><br>
            Example:
            <pre><code>&lt;img src="image.jpg" alt="Description"&gt;</code></pre>
                             <img src="images/image5.png" alt="HTML example image" style="width:100%; max-width:400px; height:auto;">
   `
    },
    {
        title: "Lesson 7: Lists",
        text: `
            There are two types of lists in HTML:
            <ul>
                <li><strong>Ordered List</strong> (<code>&lt;ol&gt;</code>): A numbered list.</li>
                <li><strong>Unordered List</strong> (<code>&lt;ul&gt;</code>): A bulleted list.</li>
            </ul>
            List items are added using the <code>&lt;li&gt;</code> tag.
            <br><br>
            Example:
                                    <img src="images/image6.png" alt="HTML example image" style="width:100%; max-width:400px; height:auto;">

        `
    },
    {
        title: "Lesson 8: Tables",
        text: `
            Tables are created using the <code>&lt;table&gt;</code> tag. A table consists of rows 
            (<code>&lt;tr&gt;</code>) and cells (<code>&lt;td&gt;</code> or <code>&lt;th&gt;</code>).
            <ul>
                <li><strong>&lt;tr&gt;</strong>: Defines a row in the table.</li>
                <li><strong>&lt;td&gt;</strong>: Defines a standard cell in the table.</li>
                <li><strong>&lt;th&gt;</strong>: Defines a header cell in the table (usually bold and centered).</li>
            </ul>
            <br>
             <img src="images/image7.png" alt="HTML example image" style="width:100%; max-width:400px; height:auto;">
             <img src="images/image.png" alt="HTML example image" style="width:100%; max-width:400px; height:auto;">

        `
    }
];


// Select elements
const lessonTitle = document.getElementById('lesson-title');
const lessonText = document.getElementById('lesson-text');

// Function to display a selected lesson
function showLesson(index) {
    lessonTitle.textContent = lessons[index].title;
    lessonText.textContent = lessons[index].text;
}
function showLesson(index) {
    lessonTitle.textContent = lessons[index].title; // Başlığı düz metin olarak ekliyoruz
    lessonText.innerHTML = lessons[index].text; // HTML içeriği için innerHTML kullanıyoruz
}
