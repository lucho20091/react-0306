import './App.css';

export function Page() {
  return (
    <>
      <h1>Reasons I am excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be 
        able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer
        if I know React</li>
      </ol>
    </>
  );
}

export function Header(){
  return (
    <nav>
      <img src="logo512.png" width="50px" alt="this is the logo of react"/>
    </nav>
  )
}

export function Footer(){
  return (
    <footer>
      <p>2024 mora development. All rights reserved</p>
    </footer>
  )
}
