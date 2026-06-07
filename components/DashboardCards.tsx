export default function DashboardCards() {
  return (
    <section className="mt-8 grid gap-6 lg:grid-cols-2">
      {/* Latest from Bitscale */}
      <div className="rounded-xl border border-gray-200 bg-[#F7FBFF] p-5">
        <h3 className="mb-4 text-lg font-medium text-blue-600">
          Latest from Bitscale
        </h3>

        <div className="flex flex-col gap-4 sm:flex-row">
          {/* Video Thumbnail */}
          <div className="flex h-40 w-full sm:h-28 sm:w-40 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100">
            ▶
          </div>

          {/* Content */}
          <div className="flex-1">
            <h4 className="text-lg font-medium text-gray-900">
              How to Integrate 2 Way HubSpot
            </h4>

            <p className="mt-2 line-clamp-3 text-sm text-gray-500">
              Prerequisites for this integration is that you should have a
              HubSpot account and copy the API key.
            </p>

            <p className="mt-3 text-xs text-gray-400">Posted today</p>
          </div>
        </div>
      </div>

      {/* Product Demo */}
      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-white">
            ✓
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-900">
              Complete product demo
            </h3>

            <p className="mt-1 text-gray-500">
              92% of users nailed Bitscale after this walkthrough
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="h-2 rounded-full bg-gray-200">
            <div className="h-2 w-[75%] rounded-full bg-green-600" />
          </div>

          <p className="mt-2 text-right text-sm text-green-700">75%</p>
        </div>

        {/* Checklist */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            ✓ Create your data list
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            ✓ Learn about BitAgent
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            ✓ Connect an integration
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            ○ Customise waterfall providers
          </div>
        </div>
      </div>
    </section>
  );
}
