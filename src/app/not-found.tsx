import { AppLink } from '../components/AppLink';

export default function NotFound() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
        <p className="text-base text-slate-600">
          We could not locate that page. Browse our US inventory of new, used, and modified containers.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <AppLink
            to="/"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-orange-700 hover:bg-orange-800 rounded-md"
          >
            Return Home
          </AppLink>
          <AppLink
            to="/shipping-containers-for-sale/"
            className="px-5 py-2.5 text-sm font-medium text-slate-800 bg-white border border-slate-300 rounded-md"
          >
            Browse All Containers
          </AppLink>
        </div>
      </div>
    </section>
  );
}
