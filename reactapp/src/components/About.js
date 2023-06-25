import React, { Component } from "react";

const About = () => {
  return (
    <main>
      <div>
        <h3>About</h3>
        <p>A simple recipe website for simple recipes.</p>
        <p>The recipes here are made to be simple, easy and cheap.</p>
        <p>
          The webite was created in order for me to learn{" "}
          <a href="https://facebook.github.io/react/">React</a>.
        </p>
        <p>built with:</p>
        <ul>
          <li>
            <a href="https://get.asp.net/">ASP.NET Core</a> and{" "}
            <a href="https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx">
              C#
            </a>{" "}
            for cross-platform server-side code
          </li>
          <li>
            <a href="https://facebook.github.io/react/">React</a> for
            client-side code
          </li>
          <li>
            <a href="http://getbootstrap.com/">Bootstrap</a> for layout and
            styling
          </li>
        </ul>
        <p>
          Code used can be found{" "}
          <a href="https://github.com/niallll/RecipeWebsite">here.</a>
        </p>
      </div>
    </main>
  );
};
export default About;
