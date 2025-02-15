```javascript
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };

  const navigateToAbout = () => {
    router.push('/about');
  };

  return (
    <div>
      <button onClick={navigateToHome}>Home</button>
      <button onClick={navigateToAbout}>About</button>
    </div>
  );
}

export default MyComponent;
```