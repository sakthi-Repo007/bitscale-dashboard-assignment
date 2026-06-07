"use client";

import Modal from "../ui/Modal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function FindPeopleModal({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" title="Find People">
      <div className="grid gap-6 xl:grid-cols-12">
        <div className="xl:col-span-4">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-[15px] font-medium text-[#1F2937]">
                People Keyword
              </label>

              <input
                placeholder="Enter single keyword here..."
                className="w-full border-b border-[#E5E7EB] pb-2 text-[14px] text-[#374151] outline-none placeholder:text-[#9CA3AF]"
              />
            </div>

            {[
              "Job Title",
              "Company Website",
              "Person Location",
              "Company Location",
              "Company Headcount",
              "Management Level",
            ].map((item) => (
              //   <div
              //     key={item}
              //     className="flex items-center justify-between border-b border-gray-200 pb-3"
              //   >
              //     <span className="text-[14px] md:text-[15px] font-medium text-[#1F2937]">
              //       {item}
              //     </span>

              //     <span className="text-[#6B7280]">⌄</span>
              //   </div>
              <div key={item} className="border-b border-[#E5E7EB] pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] md:text-[15px] font-medium text-[#1F2937]">
                    {item}
                  </span>

                  <span className="text-[#6B7280]">⌄</span>
                </div>

                <p className="mt-1 text-[13px] text-[#9CA3AF]">
                  Example value...
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="xl:col-span-8">
          <div className="flex min-h-[250px] md:min-h-[350px] xl:min-h-[500px] items-center justify-center rounded-xl border border-gray-200">
            <div className="text-center">
              <div className="mb-4 text-6xl">📋</div>

              <p className="px-4 text-center text-sm text-gray-500">
                Start your company search and preview results
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
