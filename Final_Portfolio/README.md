![](RackMultipart20200521-4-a948ep_html_a43476dd8b65dd79.png) **Events project -Final Portfolio and Reflection**

My Exploratory as well as my Narrative project later has to do with a big cluster of datasets of Ted Conferences that took place between years 2009-2019.

![](RackMultipart20200521-4-a948ep_html_e2e191251cf1178a.png)

**Abstract**

This project intends to focus on a data analysis and visualization proposal based on datasets of TED Conferences events. TED Conferences LLC is a nonprofit company devoted to spreading ideas, usually in the form of short, powerful talks. It began as conferences focusing mostly on technology, entertainment and design. However, within its years of operation it has come to a point today of covering almost any topic, such as innovations, science, business, global issues, arts and many more. It managed to welcome people from every walk of life and culture who seek a deeper understanding of the contemporary cultural analysis. However, during this process of TED events establishment there was a variety of alterations as every city that was hosting it. Depending on which country presents Ted Events, spreading informative ideas in every conference all year long, an interesting agenda has been created throughout these years that is worth taking into consideration.

What I managed to succeed form that TED events project was to discover interesting patterns, trends and to visualize interesting similarities or differences of variables that are relevant to cities worldwide over these years.

**Datasets**

The methodology of collecting all data of TED events for all the cities between the years 2009-2019 is literally based on collecting detailed information for these events from different global online platforms and other resources.

![](RackMultipart20200521-4-a948ep_html_23943009da7f2a6e.jpg)

The Datasets that I worked to make variables to examine TED Event project was an inspiration from a huge pilot data analysis enterprise called &quot;Elsewhere&quot;, a pioneer of Cultural Analytics Lab. It is a project that contains a large number of datasets of global contemporary culture activities that were collected and measured by different practitioners.

Filtering datasets only for TED events I created my own dataset which I cleaned, filtered, sorted and pivoted in useful variables to create my D3 visualizations. I also managed to extract dates of those events and find also their geographic location in order to georeferenced my TED events global map later.

**Mockups and sketches**

![](RackMultipart20200521-4-a948ep_html_d697d3718ab89b5c.jpg) ![](RackMultipart20200521-4-a948ep_html_8bbe93d891a6f0f9.png)

![](RackMultipart20200521-4-a948ep_html_1eb8a07e76be9070.jpg) ![](RackMultipart20200521-4-a948ep_html_1eb8a07e76be9070.jpg)

**Exploratory project**

![](RackMultipart20200521-4-a948ep_html_5c46ce181b00c904.jpg)

My original inspiration in my exploratory project was to load my dataset but with less data in order to try to see how they are plotted on my interactive GeoJSON map. What I wanted to highlight mostly was the variables I created in each tooltip that pops up in every geographic identifier that hosts TED Talk conferences. I uploaded the dataset to Python for cleaning and analysis, and exported a clean CSV for import into D3.I used only a part of my completed dataset, (took only 4 years of the events) as every time I was feeding more data my D3 couldn&#39;t load them everything. This was something that I could investigate later in the next step. What I wanted to visualize for my next D3 chart was to try to make various line charts using my existed dataset columns and try to see where the interest of those variables would be. Below are some of my experiments that I have done with R language.

Using level of Growth column in my dataset, the following bar chart shows that:

1. Developing cities worldwide are predominate as opposed developed cities last two or three years.
2. While developed cities from Americas or Europa used to be in top positions now it seems that developing cities in particular Asian cities from Asia and India.
3. It is obviously a big transition of an interest to host TED events from developed economies to developing level economies. It seems that western countries tend to have less interest in comparison with eastern countries where innovation, education and knowledge dimensions are remarkable.
4. I also noticed that the quantity of TED events in 2019 are much less comparing it with previous years. It seems that Ted Events will be replaced possibly with a new way of trends.(maybe another type of event ).

![](RackMultipart20200521-4-a948ep_html_d4ac6062a1fbbe7f.jpg)

Another experiment that helped me taking a decision of what my next D3 Visualization would be was the next line chart that shows all the transition Economies worldwide. It turns that a lot of transition economies hosted TED events between that time and most of them were in Europe. This chart also made me think that even more cities with low GDP and higher HDI are willing to participate in such events.My next thoughts were to try to find out was what types of conferences these cities are hosting. What is the Innovation, technology science rate for every city? How does this relate to the subject of the TED Talk?What are the correlations between Country Comparisons and talk subjects? That would be great to visualize to my next Narrative or later during my Capstone project research.

![](RackMultipart20200521-4-a948ep_html_d1da8f59b3ad18f2.jpg)

I&#39;m pretty happy with how this project turned out although I didn&#39;t have time to complete the second D3 chart .The only thing I managed to do was to try to work in my D3 code and HTML code. I created the SVG and brought the axis that I wanted but I left it incomplete.

The simple bar charts I made using R language are sometimes misaligned and are not interactive but my goal for the next narrative project would be to improve it as much as I possible.

**Narrative project**

For my Narrative project, which is a continuation of my Exploratory project I tried to improve my global map and complete the second D3 visualization. I worked with different directions and I created various experiments to see how I can deepen more into these datasets depending on the variables that I joined in my datasets. So exploring theses directions I wanted to give answers to a big range of questions such as :

- At which speed do TED events get organized every year?
- What could we see if we could plot numbers off all such events over these years?
- Would we discover new patterns and trends for every large or small city that hosts TED events?
- What&#39;s going on with the frequency of TED local events conferences? Do the charts show a gradual slowdown? If so, what is it that differentiates developed and developed economy countries?

So what I wanted to investigate more was to try to play with HDI (Human Development Index) of each country, a key dimension that measures the average of achievement of human development like a long and healthy life, being knowledgeable and have a decent standard of living. Also it would be great if I could see any correlation of HDI with GDP

(Gross Domestic Product) which is a measure of a country&#39;s economic output that accounts for its number of people. Also my challenge was to see what the role of The Economic Complexity Index (ECI) which measures the relative knowledge intensity of an economy or a product **.** Before proceed with my D3 code I found interesting to visualize what is the correlation of those variables in all cities that are hosting TED talks worldwide. Using Tableau I created this bar chart:

![](RackMultipart20200521-4-a948ep_html_795197e0c576e899.jpg)

All three variable are running almost proportionally. In that chart , the truth is that I couldn&#39;t find interesting details for the transition economies particularly in Europe, but this challenge could be revealed a soon as I was plotting my second D3 chart.

My first effort with D3 visualization had almost positive results as the first trial indicated. (below screenshot) .The HDI and GDP axis showed that both work proportionally as well.It turns that the cities that attract TED talks have high rates of HDI.

This is also why this HDI rate is moving parallel with GDP Per capita, which also indicates that prosperity index is aligned with rate of Growth. The interesting part was that the countries with higher HDI but lower GDP are interested for those events profoundly and they are coming from South Eastern Europe and Latin America.

![](RackMultipart20200521-4-a948ep_html_4e44e24344840486.jpg)

After I created my second D3 chart, I played with CSS and tried to make it aesthetically better. Additionally what I managed to achieve was to connect this graph with the dropdown menu of the selected year of my global map.

So when the user selects the year to see the traffic of the events on the map, he can also see the results of those cities and their correlation depending on their HDI and GDP. Moreover, I added tooltips to make it easier to see more information for every single geographic identifier.

![](RackMultipart20200521-4-a948ep_html_9323f64e8c50fe3d.jpg)

In my TED global map I changed the aesthetic of map, I cleaned and analyzed more of my data and also I played with CSS as improving background of dropdown menu etc. In that part Critique presentation and the feedback of my classmates gave me more inspirations to try to improve even more the functionality and the aesthetic of my visualizations.

![](RackMultipart20200521-4-a948ep_html_fdcafa4ff08f6c90.jpg)

The fact is that I approached this project very differently from the narrative visualization, as I was more ambitious to actually plan things out. Even I was hoping that I will proceed in the third D3 chart I run out of time trying to ameliorate more my existed visualizations TED events. This was a big dataset with so much information that I was quickly overwhelmed with various explorations I tried to apply in R studio or Python code. Furthermore I read many of theories about contemporary culture happening worldwide and one of my challenges were to try to find the types of TED events every city is interested. That would be one of my next goals in the research that I will extend for my Capstone project.

**Conclusion**

After completing both of my exploratory and narrative projects, I felt very proud of myself that I could managed to complete all the research and development with coding design decisions and functionalities. This encouraged me to proceed with my Capstone project in the summer and I felt that I have already done much to help myself start working with this interesting project.

Although I had a relevant experience with HTML and CSS I gained a deeper understanding of how much this D3 framework code is developing, I confess that somewhere in the middle of the semester I wasn&#39;t be able to follow deadlines with assignments and absorb all this D3 code information trying to learn everything and apply on my projects. I felt very often frustrated trying to create visualizations as I had envisioned. Finally, I started understand the structure of D3.I have to admit that the reason that I clarified everything, it was the following boilerplate logic:

![](RackMultipart20200521-4-a948ep_html_1f024c02c4784884.jpg)

I think that this was the most helpful thing I learned. Once you conceive this concept of this logic of these five steps in your mind then all can be easier to be resolved.

I also learned Github and Command line. Although I was struggling to learn these commands in other classes I felt here like more mature to endure conflicts and trouble shootings using all git commands.

I also found very helpful the ideas that I got form classmates during the critique sessions. Although I completed some of the changes that have been mentioned I intend to complete all the rest ones as the projects is being developed during the summer.

My initial idea for TED events and the mock ups are almost accurate comparing them with the results of my final project. The only thing I planned but I haven&#39;t completed was a third line graph showing GDP, HDI and ECI individually but that is something that I completed with R language so I can discover more correlations between them.

In any case I felt that the final result of this project was unfinished. If I had more time and resources I could have given another design dimension and time to play with its aesthetic aspect of it. But I&#39;m not worried much, as I know that this project will have a multidisciplinary approach, aiming at strengthening the importance of TED performances worldwide.

Overall, this class was definitely challenging and it worked positive for me even though remote class was a new experience in those turbulent times. Being a UX designer this class make me feel more confident in my abilities as a developer but also as a user interface designer. My projects from now on will include more D3 visualizations and programming so hopefully my data design skills will be enriched as I will try to have more impactful, accurate and engaging data visualizations that tell stories with data succinctly and explore new ways to consistently raise standards.
