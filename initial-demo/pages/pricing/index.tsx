import Link from 'next/link';
import {MainLayout} from '../../components/layouts/MainLayout';

export default function PrincingPage() {
    return (
        <MainLayout>
          <h1>Princing page</h1>
          <h1 className={'title'} > 
            ir a <Link href="/">
            home
            </Link>
          </h1>
        </MainLayout>
      );
}
