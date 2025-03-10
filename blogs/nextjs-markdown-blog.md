---
title: "Next.js Markdown blog"
date: "Tue Nov 13 2018 02:00:00 GMT+0200 (Eastern European Standard Time)"
description: "Tutorial on building a Markdown-powered blog with Next.js, including setup, Markdown parsing, and dynamic routing for blog posts."
---

Next.js is a great [React](https://reactjs.org/) framework. It's easy to use and lightweight. I use it on my personal [website (toukopeltomaa.com)](https://toukopeltomaa.com/).

In this post I'm going to show how to make a simple blog using [Markdown](https://en.wikipedia.org/wiki/Markdown) and [Next.js](https://nextjs.org/).

### 1. Create folder for all Markdown files

Create a folder named posts root of your project. Create all of your posts as Markdown there

#### Example Markdown file in posts/example-post.md

```markdown
---
title: Example post
date: 13-11-2018
writtenBy: Touko Peltomaa
---

## Example post
```

### 2. Add Webpack plugin raw-loader to next.config.js

We need [raw-loader](https://github.com/webpack-contrib/raw-loader) to load Markdown files

```bash
npm i -D raw-loader
```

#### next.config.js file

Create next.config.js to your project's root folder if you haven't already

```js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};
```

### 3. Create home page at pages/index.js

#### Parse posts

We are going to parse posts with [gray-matter](https://github.com/jonschlinkert/gray-matter) library

gray-matter library will parse the [YAML](https://en.wikipedia.org/wiki/YAML) metadata. We can use the YAML data for SEO, written by and post dates.

```bash
npm i -S gray-matter
```

#### Gets posts from posts/\* folder

```jsx
import React from "react";
import matter from "gray-matter";
import Link from "next/link";

export default class extends React.Component {
  static async getInitialProps() {
    // Get posts from folder
    const posts = ((ctx) => {
      const keys = ctx.keys();
      const values = keys.map(ctx);

      const data = keys.map((key, index) => {
        // Create slug from filename
        const slug = key
          .replace(/^.*[\\\/]/, "")
          .split(".")
          .slice(0, -1)
          .join(".");
        const value = values[index];

        // Parse document
        const document = matter(value);

        return {
          document,
          slug,
        };
      });

      return data;
    })(require.context("../posts", true, /\.md$/));

    return {
      posts,
    };
  }

  render() {
    return (
      <>
        <h1>Posts</h1>
        {this.props.posts.map(({ document: { data }, slug }) => (
          <Link href={{ pathname: "/post", query: { id: slug } }} key={slug}>
            <h2>{data.title}</h2>
          </Link>
        ))}
      </>
    );
  }
}
```

The `getInitialProps` function gets posts from posts folder and returns them in a usable format. _We are going to use your filename as our post's slug or id_

### 3. Create post page at pages/post.js

Get document name from querystring, require it and parse it.

#### Install React Markdown

To render Markdown we are going to use [react-markdown](https://github.com/rexxars/react-markdown)

```bash
npm i -S react-markdown
```

```jsx
import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const post = await import(`../posts/${query.id}.md`);
    const document = matter(post.default);

    return {
      ...document,
    };
  }

  render() {
    return (
      <>
        <h1>{this.props.data.title}</h1>
        <i>{`Written by ${this.props.data.writtenBy} | ${this.props.data.date}`}</i>
        <ReactMarkdown source={this.props.content} />
      </>
    );
  }
}
```
