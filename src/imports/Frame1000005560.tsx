import svgPaths from "./svg-4qp7u7apfq";

function Frame57() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[10px]">
      <p className="-translate-x-1/2 absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[19.333px] left-[12px] not-italic text-[19.333px] text-center text-white top-[2px] w-[24px]"></p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#2a6ff3] h-[44px] left-[-12px] overflow-clip rounded-[10px] top-0 w-[239px]" data-name="Input">
      <Frame57 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[46px] not-italic text-[16px] text-white top-[12px] whitespace-nowrap">Dashboard</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[10px]">
      <p className="-translate-x-1/2 absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[19.333px] left-[12px] not-italic text-[#667085] text-[19.333px] text-center top-[2px] w-[24px]"></p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-white h-[44px] left-0 overflow-clip top-[73px] w-[239px]" data-name="Input">
      <Frame58 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#667085] text-[16px] top-[12px] whitespace-nowrap">Campaigns</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[10px]">
      <p className="-translate-x-1/2 absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[19.333px] left-[12px] not-italic text-[#667085] text-[19.333px] text-center top-[2px] w-[24px]"></p>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-white h-[44px] left-0 overflow-clip top-[134px] w-[239px]" data-name="Input">
      <Frame59 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#667085] text-[16px] top-[12px] whitespace-nowrap">Audience</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[10px]">
      <p className="-translate-x-1/2 absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[19.333px] left-[12px] not-italic text-[#667085] text-[19.333px] text-center top-[2px] w-[24px]"></p>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute bg-white h-[44px] left-0 overflow-clip top-[193px] w-[239px]" data-name="Input">
      <Frame60 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#667085] text-[16px] top-[12px] whitespace-nowrap">Messages</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[10px]">
      <p className="-translate-x-1/2 absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[19.333px] left-[12px] not-italic text-[#667085] text-[19.333px] text-center top-[2px] w-[24px]"></p>
    </div>
  );
}

function Input4() {
  return (
    <div className="absolute bg-white h-[44px] left-0 overflow-clip top-[251px] w-[239px]" data-name="Input">
      <Frame61 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#667085] text-[16px] top-[12px] whitespace-nowrap">Analytics</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute h-[268px] left-0 top-0 w-[239px]">
      <Input />
      <Input1 />
      <Input2 />
      <Input3 />
      <Input4 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[10px]">
      <p className="-translate-x-1/2 absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[19.333px] left-[12px] not-italic text-[#667085] text-[19.333px] text-center top-[2px] w-[24px]"></p>
    </div>
  );
}

function Input5() {
  return (
    <div className="absolute bg-white h-[44px] left-0 overflow-clip top-0 w-[239px]" data-name="Input">
      <Frame63 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#667085] text-[16px] top-[12px] whitespace-nowrap">Setting</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[10px]">
      <p className="-translate-x-1/2 absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[19.333px] left-[12px] not-italic text-[#667085] text-[19.333px] text-center top-[2px] w-[24px]"></p>
    </div>
  );
}

import { useNavigate } from "react-router";
import { createClient } from "@supabase/supabase-js";

// Provide placeholder values for supabase url and key to avoid throwing errors if not present
// The user should set the env variables appropriately.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://placeholder.supabase.co";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "placeholder-key";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function Input6() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <button onClick={handleLogout} className="absolute bg-white h-[44px] left-0 overflow-clip top-[56px] w-[239px] hover:bg-gray-50 cursor-pointer text-left transition-colors border-none" data-name="Input">
      <Frame64 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#667085] text-[16px] top-[12px] whitespace-nowrap">Logout</p>
    </button>
  );
}

function Frame62() {
  return (
    <div className="absolute h-[100px] left-0 top-[399px] w-[239px]">
      <Input5 />
      <Input6 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute h-[308px] left-[20px] top-[20px] w-[239px]">
      <Frame29 />
      <div className="absolute h-0 left-0 top-[379px] w-[239px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239 1">
            <path d="M0 0.5H239" id="Vector 5" stroke="var(--stroke-0, #E3E8EF)" />
          </svg>
        </div>
      </div>
      <Frame62 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[20px] top-[20px]">
      <Frame30 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[10px]">
      <p className="-translate-x-1/2 absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[19.333px] left-[12px] not-italic text-[#667085] text-[19.333px] text-center top-[2px] w-[24px]"></p>
    </div>
  );
}

function Input7() {
  return (
    <div className="absolute bg-white h-[44px] left-[22px] overflow-clip top-[330px] w-[239px]" data-name="Input">
      <Frame65 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#667085] text-[16px] top-[12px] whitespace-nowrap">Automation</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white h-[1881px] left-[33px] rounded-[20px] top-[20px] w-[259px]" data-name="Frame">
      <Group1 />
      <Input7 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[33px] top-[20px]">
      <Frame />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute h-[38px] left-0 overflow-clip top-0 w-[1115px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[38px] left-0 not-italic text-[#101828] text-[24px] top-0 whitespace-pre">{`👋  Welcome, Admin`}</p>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="absolute bg-[#2a6ff3] left-[23px] overflow-clip rounded-[100px] size-[58px] top-[23px]" data-name="Featured icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[24.167px] left-[18px] not-italic text-[24.167px] text-white top-[16.5px] whitespace-nowrap">User</p>
    </div>
  );
}

function ChangeAndText() {
  return <div className="absolute h-[20px] left-[61.5px] top-[9px] w-[152px]" data-name="Change and text" />;
}

function NumberAndBadge() {
  return (
    <div className="absolute h-[38px] left-0 top-[28px] w-[213.5px]" data-name="Number and badge">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[38px] left-0 not-italic text-[#101828] text-[30px] top-0 whitespace-nowrap">12,378</p>
      <ChangeAndText />
    </div>
  );
}

function HeadingAndNumber() {
  return (
    <div className="absolute h-[98px] left-[23px] top-[101px] w-[213.5px]" data-name="Heading and number">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#475467] text-[14px] top-0 whitespace-nowrap">Messages Sent</p>
      <NumberAndBadge />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[61px] not-italic text-[#475467] text-[14px] top-[73px] whitespace-nowrap">vs last month</p>
      <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-0 top-[74px]" data-name="_Change">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trend-up-01">
          <div className="absolute inset-[29.17%_8.33%]" data-name="Icon">
            <div className="absolute inset-[-12%_-6%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 10.3333">
                <path d={svgPaths.pffdf00} id="Icon" stroke="var(--stroke-0, #17B26A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#067647] text-[14px] text-center whitespace-nowrap">40%</p>
      </div>
    </div>
  );
}

function MetricItem() {
  return (
    <div className="absolute bg-white border border-[#e4e7ec] border-solid h-[224px] left-0 rounded-[12px] top-0 w-[261.5px]" data-name="Metric item">
      <FeaturedIcon />
      <HeadingAndNumber />
    </div>
  );
}

function FeaturedIcon1() {
  return (
    <div className="absolute bg-[#2a6ff3] left-[23px] overflow-clip rounded-[100px] size-[58px] top-[23px]" data-name="Featured icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[24.167px] left-[16.5px] not-italic text-[24.167px] text-white top-[16.5px] whitespace-nowrap"></p>
    </div>
  );
}

function NumberAndBadge1() {
  return (
    <div className="absolute h-[38px] left-0 top-[28px] w-[213.5px]" data-name="Number and badge">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[38px] left-0 not-italic text-[#101828] text-[30px] top-0 whitespace-nowrap">20</p>
    </div>
  );
}

function ChangeAndText1() {
  return (
    <div className="absolute h-[20px] left-[0.5px] top-[74px] w-[151px]" data-name="Change and text">
      <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-0 top-0" data-name="_Change">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trend-down-01">
          <div className="absolute inset-[29.17%_8.33%]" data-name="Icon">
            <div className="absolute inset-[-12%_-6%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 10.3333">
                <path d={svgPaths.p20536d80} id="Icon" stroke="var(--stroke-0, #F04438)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#b42318] text-[14px] text-center whitespace-nowrap">70%</p>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[61px] not-italic text-[#475467] text-[14px] top-0 whitespace-nowrap">vs last month</p>
    </div>
  );
}

function HeadingAndNumber1() {
  return (
    <div className="absolute h-[98px] left-[23px] top-[101px] w-[213.5px]" data-name="Heading and number">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#475467] text-[14px] top-0 whitespace-nowrap">Active Campaign</p>
      <NumberAndBadge1 />
      <ChangeAndText1 />
    </div>
  );
}

function MetricItem1() {
  return (
    <div className="absolute bg-white border border-[#e4e7ec] border-solid h-[224px] left-[284.5px] rounded-[12px] top-0 w-[261.5px]" data-name="Metric item">
      <FeaturedIcon1 />
      <HeadingAndNumber1 />
    </div>
  );
}

function FeaturedIcon2() {
  return (
    <div className="absolute bg-[#2a6ff3] left-[23px] overflow-clip rounded-[100px] size-[58px] top-[23px]" data-name="Featured icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[24.167px] left-[13.5px] not-italic text-[24.167px] text-white top-[16.5px] whitespace-nowrap"></p>
    </div>
  );
}

function NumberAndBadge2() {
  return (
    <div className="absolute h-[38px] left-0 top-[28px] w-[213.5px]" data-name="Number and badge">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[38px] left-0 not-italic text-[#101828] text-[30px] top-0 whitespace-nowrap">101,823</p>
    </div>
  );
}

function ChangeAndText2() {
  return (
    <div className="absolute h-[20px] left-0 top-[72px] w-[159px]" data-name="Change and text">
      <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-0 top-0" data-name="_Change">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trend-up-01">
          <div className="absolute inset-[29.17%_8.33%]" data-name="Icon">
            <div className="absolute inset-[-12%_-6%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 10.3333">
                <path d={svgPaths.pffdf00} id="Icon" stroke="var(--stroke-0, #17B26A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#067647] text-[14px] text-center whitespace-nowrap">100%</p>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[69px] not-italic text-[#475467] text-[14px] top-0 whitespace-nowrap">vs last month</p>
    </div>
  );
}

function HeadingAndNumber2() {
  return (
    <div className="absolute h-[98px] left-[23px] top-[101px] w-[213.5px]" data-name="Heading and number">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#475467] text-[14px] top-0 whitespace-nowrap">Replies Received</p>
      <NumberAndBadge2 />
      <ChangeAndText2 />
    </div>
  );
}

function MetricItem2() {
  return (
    <div className="absolute bg-white border border-[#e4e7ec] border-solid h-[224px] left-[569px] rounded-[12px] top-0 w-[261.5px]" data-name="Metric item">
      <FeaturedIcon2 />
      <HeadingAndNumber2 />
    </div>
  );
}

function FeaturedIcon3() {
  return (
    <div className="absolute bg-[#2a6ff3] left-[23px] overflow-clip rounded-[100px] size-[58px] top-[23px]" data-name="Featured icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[24.167px] left-[16.5px] not-italic text-[24.167px] text-white top-[16.5px] whitespace-nowrap"></p>
    </div>
  );
}

function NumberAndBadge3() {
  return (
    <div className="absolute h-[38px] left-0 top-[28px] w-[213.5px]" data-name="Number and badge">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[38px] left-0 not-italic text-[#121926] text-[30px] top-0 whitespace-nowrap">70.8%</p>
    </div>
  );
}

function ChangeAndText3() {
  return (
    <div className="absolute h-[20px] left-[0.5px] top-[73px] w-[152px]" data-name="Change and text">
      <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-0 top-0" data-name="_Change">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trend-up-01">
          <div className="absolute inset-[29.17%_8.33%]" data-name="Icon">
            <div className="absolute inset-[-12%_-6%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 10.3333">
                <path d={svgPaths.pffdf00} id="Icon" stroke="var(--stroke-0, #17B26A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#067647] text-[14px] text-center whitespace-nowrap">50%</p>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[62px] not-italic text-[#475467] text-[14px] top-0 whitespace-nowrap">vs last month</p>
    </div>
  );
}

function HeadingAndNumber3() {
  return (
    <div className="absolute h-[98px] left-[23px] top-[101px] w-[213.5px]" data-name="Heading and number">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#475467] text-[14px] top-0 whitespace-nowrap">Response Rate</p>
      <NumberAndBadge3 />
      <ChangeAndText3 />
    </div>
  );
}

function MetricItem3() {
  return (
    <div className="absolute bg-white border border-[#e4e7ec] border-solid h-[224px] left-[853.5px] rounded-[12px] top-0 w-[261.5px]" data-name="Metric item">
      <FeaturedIcon3 />
      <HeadingAndNumber3 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute h-[224px] left-0 top-0 w-[1115px]">
      <MetricItem />
      <MetricItem1 />
      <MetricItem2 />
      <MetricItem3 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute h-[224px] left-0 overflow-clip rounded-[12px] top-[54px] w-[1115px]" data-name="Table">
      <Frame42 />
    </div>
  );
}

function ButtonGroupBase() {
  return (
    <div className="absolute bg-white h-[40px] left-0 top-0 w-[119px]" data-name="_Button group base">
      <div aria-hidden="true" className="absolute border-[#e4e7ec] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[20px] not-italic text-[#344054] text-[14px] top-[10px] whitespace-nowrap">12/11/25</p>
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[20px] left-[83px] not-italic text-[#344054] text-[18px] top-[10px] whitespace-nowrap"></p>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="absolute h-[40px] left-[245px] overflow-clip rounded-br-[8px] rounded-tr-[8px] top-0 w-[119px]" data-name="Button group">
      <ButtonGroupBase />
    </div>
  );
}

function Frame66() {
  return (
    <div className="absolute h-[40px] left-[765px] top-[-4px] w-[364px]">
      <div className="absolute left-0 rounded-bl-[8px] rounded-tl-[8px] top-0" data-name="Button group">
        <div className="content-stretch flex isolate items-start overflow-clip relative rounded-[inherit]">
          <div className="bg-[#f9fafb] content-stretch flex items-center justify-center min-h-[40px] px-[16px] py-[6px] relative shrink-0 z-[9]" data-name="_Button group base">
            <div aria-hidden="true" className="absolute border-[#e4e7ec] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none" />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#182230] text-[14px] whitespace-nowrap">Monthly</p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center min-h-[40px] px-[16px] py-[6px] relative shrink-0 z-[8]" data-name="_Button group base">
            <div aria-hidden="true" className="absolute border-[#e4e7ec] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none" />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Weekly</p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center min-h-[40px] px-[16px] py-[6px] relative shrink-0 z-[1]" data-name="_Button group base">
            <div aria-hidden="true" className="absolute border-[#d0d5dd] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none" />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Yearly</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-tl-[8px]" />
      </div>
      <ButtonGroup />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute h-[278px] left-[24px] top-[24px] w-[1115px]">
      <Frame41 />
      <Table />
      <Frame66 />
    </div>
  );
}

function HorizontalTabs() {
  return (
    <div className="absolute h-[36px] left-[298px] top-[12px] w-[228px]" data-name="Horizontal tabs">
      <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip px-[12px] py-[8px] rounded-[6px] top-0" data-name="_Tab button base">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">Daily</p>
      </div>
      <div className="absolute bg-[#f8fafc] content-stretch flex items-center justify-center left-[66px] overflow-clip px-[12px] py-[8px] rounded-[6px] top-0" data-name="_Tab button base">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#202939] text-[14px] whitespace-nowrap">Weekly</p>
      </div>
      <div className="absolute content-stretch flex items-center justify-center left-[148px] overflow-clip px-[12px] py-[8px] rounded-[6px] top-0" data-name="_Tab button base">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">Monthly</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[60px] left-[-1px] top-[-1px] w-[546px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[20px] not-italic text-[#121926] text-[17px] top-[20px] whitespace-nowrap">Messages Sent</p>
      <HorizontalTabs />
    </div>
  );
}

function Divider() {
  return (
    <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455 1">
            <line id="Divider" stroke="var(--stroke-0, #F2F4F7)" strokeLinecap="round" x1="0.5" x2="454.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455 1">
            <line id="Divider" stroke="var(--stroke-0, #F2F4F7)" strokeLinecap="round" x1="0.5" x2="454.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Divider2() {
  return (
    <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455 1">
            <line id="Divider" stroke="var(--stroke-0, #F2F4F7)" strokeLinecap="round" x1="0.5" x2="454.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Divider3() {
  return (
    <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455 1">
            <line id="Divider" stroke="var(--stroke-0, #F2F4F7)" strokeLinecap="round" x1="0.5" x2="454.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Divider4() {
  return (
    <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455 1">
            <line id="Divider" stroke="var(--stroke-0, #F2F4F7)" strokeLinecap="round" x1="0.5" x2="454.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Divider5() {
  return (
    <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455 1">
            <line id="Divider" stroke="var(--stroke-0, #F2F4F7)" strokeLinecap="round" x1="0.5" x2="454.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function XAxis1() {
  return (
    <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-px not-italic text-[#475467] text-[12px] text-right top-0 w-[453px] whitespace-nowrap" data-name="_X-axis">
      <p className="-translate-x-full absolute left-[25px] top-0">Mon</p>
      <p className="-translate-x-full absolute left-[97.33px] top-0">Tue</p>
      <p className="-translate-x-full absolute left-[174.67px] top-0">Wed</p>
      <p className="-translate-x-full absolute left-[243px] top-0">Jul</p>
      <p className="-translate-x-full absolute left-[316.33px] top-0">Thu</p>
      <p className="-translate-x-full absolute left-[382.67px] top-0">Fri</p>
      <p className="-translate-x-full absolute left-[453px] top-0">Sat</p>
    </div>
  );
}

function XAxis() {
  return (
    <div className="absolute h-[18px] left-[48px] top-[238px] w-[455px]" data-name="X-axis">
      <XAxis1 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[256px] left-[22px] top-0 w-[503px]" data-name="Content">
      <div className="absolute content-stretch flex flex-col h-[238px] items-start justify-between left-0 top-0 w-[503px]" data-name="_Y-axis">
        <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="_Y-axis line">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-right w-[40px]">125</p>
          <Divider />
        </div>
        <div className="content-stretch flex gap-[8px] h-[17px] items-center relative shrink-0 w-full" data-name="_Y-axis line">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-right w-[40px]">100</p>
          <Divider1 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[17px] items-center relative shrink-0 w-full" data-name="_Y-axis line">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-right w-[40px]">75</p>
          <Divider2 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[17px] items-center relative shrink-0 w-full" data-name="_Y-axis line">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-right w-[40px]">50</p>
          <Divider3 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[17px] items-center relative shrink-0 w-full" data-name="_Y-axis line">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-right w-[40px]">25</p>
          <Divider4 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[17px] items-center relative shrink-0 w-full" data-name="_Y-axis line">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-right w-[40px]">0</p>
          <Divider5 />
        </div>
      </div>
      <XAxis />
    </div>
  );
}

function Axis() {
  return (
    <div className="absolute h-[256px] left-[-14px] top-[-0.45px] w-[525px]" data-name="Axis">
      <div className="absolute content-stretch flex flex-col h-[256px] items-start justify-center left-0 pb-[24px] top-0" data-name="_Y-axis label">
        <div className="flex h-[72px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative text-[#475467] text-[12px] text-center whitespace-pre">{`No. of  Users`}</p>
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
}

function Series() {
  return (
    <div className="absolute contents inset-[23.96%_0_0_0]" data-name="Series 1">
      <div className="absolute inset-[23.96%_0_0_0] mix-blend-multiply" data-name="Line background">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428 172.615">
          <g id="Line background" opacity="0.1" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p1c17c800} fill="url(#paint0_linear_1_8266)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_8266" x1="214" x2="214" y1="0" y2="179.473">
              <stop stopColor="#2A6FF3" />
              <stop offset="1" stopColor="#2A6FF3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[23.96%_0_55.73%_0]" data-name="Line">
        <div className="absolute inset-[-2.17%_-0.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 430 48.1097">
            <path d={svgPaths.p15ea8200} id="Line" stroke="var(--stroke-0, #2A6FF3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LineAndBarChart() {
  return (
    <div className="absolute h-[251px] left-[24px] top-[24px] w-[498px]" data-name="Line and bar chart">
      <Axis />
      <div className="absolute h-[227px] left-[70px] top-[1.55px] w-[428px]" data-name="_Chart data">
        <Series />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[24px] top-[24px]">
      <LineAndBarChart />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[299px] left-[-1px] top-[59px] w-[546px]">
      <Group />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute bg-white border border-[#e3e8ef] border-solid h-[359px] left-0 rounded-[10px] top-0 w-[546px]">
      <Frame34 />
      <Frame1 />
    </div>
  );
}

function HorizontalTabs1() {
  return (
    <div className="absolute h-[36px] left-[298px] top-[12px] w-[228px]" data-name="Horizontal tabs">
      <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip px-[12px] py-[8px] rounded-[6px] top-0" data-name="_Tab button base">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">Daily</p>
      </div>
      <div className="absolute bg-[#f8fafc] content-stretch flex items-center justify-center left-[66px] overflow-clip px-[12px] py-[8px] rounded-[6px] top-0" data-name="_Tab button base">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#202939] text-[14px] whitespace-nowrap">Weekly</p>
      </div>
      <div className="absolute content-stretch flex items-center justify-center left-[148px] overflow-clip px-[12px] py-[8px] rounded-[6px] top-0" data-name="_Tab button base">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">Monthly</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[60px] left-[-1px] top-[-1px] w-[546px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[20px] not-italic text-[#121926] text-[16px] top-[20px] whitespace-nowrap">Replies Rate</p>
      <HorizontalTabs1 />
    </div>
  );
}

function PieChart1() {
  return (
    <div className="absolute left-0 size-[251px] top-0" data-name="_Pie chart">
      <div className="absolute inset-[-1.06%_-1.05%_-1.05%_-1.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256.284 256.308">
          <g id="_Pie chart">
            <path d={svgPaths.p32294b00} fill="var(--fill-0, #CDD5DF)" id="Background" />
            <g id="Series 2">
              <mask fill="black" height="257" id="path-2-outside-1_1_8235" maskUnits="userSpaceOnUse" width="245" x="11.6421" y="-0.333723">
                <rect fill="white" height="257" width="245" x="11.6421" y="-0.333723" />
                <path d={svgPaths.p12a8daf0} />
              </mask>
              <path d={svgPaths.p12a8daf0} fill="var(--fill-0, #2A6FF3)" />
              <path d={svgPaths.p12a8daf0} mask="url(#path-2-outside-1_1_8235)" stroke="var(--stroke-0, white)" strokeWidth="5.28421" />
            </g>
            <g id="Series 9">
              <mask fill="black" height="186" id="path-3-outside-2_1_8235" maskUnits="userSpaceOnUse" width="129" x="-0.357872" y="-0.333723">
                <rect fill="white" height="186" width="129" x="-0.357872" y="-0.333723" />
                <path d={svgPaths.p2e54c00} />
              </mask>
              <path d={svgPaths.p2e54c00} fill="var(--fill-0, #EEF2F6)" />
              <path d={svgPaths.p2e54c00} mask="url(#path-3-outside-2_1_8235)" stroke="var(--stroke-0, white)" strokeWidth="5.28421" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute h-[54.28px] left-[35.67px] not-italic text-center top-[92.47px] w-[177.021px] whitespace-nowrap">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26.421px] left-[88.51px] text-[#121926] text-[31.705px] top-0">70.8%</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[88.51px] text-[#697586] text-[14.49px] top-[36.28px]">Repetitive Orders</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute left-[24px] size-[251px] top-[24px]">
      <PieChart1 />
      <Frame37 />
    </div>
  );
}

function Dot() {
  return (
    <div className="absolute h-[14px] left-0 top-0 w-[8px]" data-name="Dot">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
        <g id="Dot">
          <circle cx="4" cy="10" fill="var(--fill-0, #2A6FF3)" id="Color" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[143px]">
      <Dot />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#121926] text-[14px] top-0 whitespace-nowrap">{`Replies `}</p>
    </div>
  );
}

function LegendSeries() {
  return (
    <div className="absolute h-[20px] left-[12px] top-[16px] w-[193px]" data-name="Legend series">
      <Frame38 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[151px] not-italic text-[#475467] text-[14px] top-0 whitespace-nowrap">70.8%</p>
    </div>
  );
}

function Dot1() {
  return (
    <div className="absolute h-[14px] left-0 top-0 w-[8px]" data-name="Dot">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
        <g id="Dot">
          <circle cx="4" cy="10" fill="var(--fill-0, #C5CCD5)" id="Color" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[143px]">
      <Dot1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#121926] text-[14px] top-0 whitespace-nowrap">{` No Replies `}</p>
    </div>
  );
}

function LegendSeries1() {
  return (
    <div className="absolute h-[20px] left-[12px] top-[48px] w-[193px]" data-name="Legend series">
      <Frame39 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[151px] not-italic text-[#475467] text-[14px] top-0 whitespace-nowrap">29.2%</p>
    </div>
  );
}

function Legend() {
  return (
    <div className="absolute bg-[#fcfcfd] h-[84px] left-[305px] rounded-[12px] top-[107.5px] w-[217px]" data-name="_Legend">
      <LegendSeries />
      <LegendSeries1 />
    </div>
  );
}

function PieChart() {
  return (
    <div className="absolute h-[299px] left-[-1px] top-[59px] w-[546px]" data-name="Pie chart">
      <Frame36 />
      <Legend />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute bg-white border border-[#e3e8ef] border-solid h-[359px] left-[569px] rounded-[10px] top-0 w-[546px]">
      <Frame35 />
      <PieChart />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute h-[359px] left-[24px] top-[326px] w-[1115px]">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function HorizontalTabs2() {
  return (
    <div className="absolute h-[49.222px] left-[815.89px] top-[15px] w-[279.111px]" data-name="Horizontal tabs">
      <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip px-[15.556px] py-[11.111px] rounded-[6px] top-0" data-name="_Tab button base">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26.667px] not-italic relative shrink-0 text-[#667085] text-[17.78px] whitespace-nowrap">Daily</p>
      </div>
      <div className="absolute content-stretch flex items-center justify-center left-[83px] overflow-clip px-[15.556px] py-[11.111px] rounded-[6px] top-0" data-name="_Tab button base">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26.667px] not-italic relative shrink-0 text-[#667085] text-[17.78px] whitespace-nowrap">Monthly</p>
      </div>
      <div className="absolute bg-[#f8fafc] content-stretch flex items-center justify-center left-[194px] overflow-clip px-[15.556px] py-[11.111px] rounded-[6px] top-0" data-name="_Tab button base">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26.667px] not-italic relative shrink-0 text-[#202939] text-[17.78px] whitespace-nowrap">Yearly</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute h-[79.222px] left-0 rounded-[12px] top-[-4.61px] w-[1115px]" data-name="Content">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[38px] left-[20px] not-italic text-[#101828] text-[24px] top-[20.61px] whitespace-nowrap">Campaign Performance</p>
      <HorizontalTabs2 />
    </div>
  );
}

function FiltersBar() {
  return (
    <div className="absolute bg-white border-[#eaecf0] border-b border-solid h-[70px] left-[-1px] top-[-1px] w-[1115px]" data-name="Filters bar">
      <Content1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[278.613px] leading-[normal] left-0 not-italic text-[14px] text-black text-right top-0 w-[76px] whitespace-nowrap">
      <p className="-translate-x-full absolute left-[76px] top-0">2,000</p>
      <p className="-translate-x-full absolute left-[76px] top-[78.98px]">1500</p>
      <p className="-translate-x-full absolute left-[76px] top-[157.95px]">500</p>
      <p className="-translate-x-full absolute left-[76px] top-[236.93px]">0</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[76px] left-[26px] top-[0.45px] w-[28px]">
      <div className="absolute bg-[rgba(126,198,255,0.6)] h-[29.609px] left-0 top-0 w-[27.746px]" />
      <div className="absolute bg-[#2a6ff3] h-[46.752px] left-0 top-[29.61px] w-[27.746px]" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute h-[76.361px] left-0 top-[176.55px] w-[80.343px]">
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[117.37px] left-[26.94px] top-0 w-[26.462px]">
      <div className="absolute bg-[#eef2f6] h-[45.511px] left-0 top-0 w-[26.462px]" />
      <div className="absolute bg-[#2a6ff3] h-[71.859px] left-0 top-[45.51px] w-[26.462px]" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute h-[117.37px] left-[80.34px] top-[135.55px] w-[80.343px]">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[151.904px] left-[26.94px] top-0 w-[26.462px]">
      <div className="absolute bg-[#eef2f6] h-[58.901px] left-0 top-0 w-[26.462px]" />
      <div className="absolute bg-[#2a6ff3] h-[93.002px] left-0 top-[58.9px] w-[26.462px]" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute h-[151.904px] left-[160.69px] top-[101.01px] w-[80.343px]">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[205.863px] left-[26.94px] top-0 w-[26.462px]">
      <div className="absolute bg-[#eef2f6] h-[79.824px] left-0 top-0 w-[26.462px]" />
      <div className="absolute bg-[#2a6ff3] h-[126.038px] left-0 top-[79.82px] w-[26.462px]" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute h-[205.863px] left-[241.03px] top-[47.05px] w-[80.343px]">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[132.479px] left-[26.94px] top-0 w-[26.462px]">
      <div className="absolute bg-[rgba(126,198,255,0.6)] h-[51.369px] left-0 top-0 w-[26.462px]" />
      <div className="absolute bg-[#2a6ff3] h-[81.109px] left-0 top-[51.37px] w-[26.462px]" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute h-[132.479px] left-[321.37px] top-[120.44px] w-[80.343px]">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[76.361px] left-[26.94px] top-0 w-[26.462px]">
      <div className="absolute bg-[#eef2f6] h-[29.609px] left-0 top-0 w-[26.462px]" />
      <div className="absolute bg-[#2a6ff3] h-[46.752px] left-0 top-[29.61px] w-[26.462px]" />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute h-[76.361px] left-[401.72px] top-[176.55px] w-[80.343px]">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[117.37px] left-[26.94px] top-0 w-[26.462px]">
      <div className="absolute bg-[#eef2f6] h-[45.511px] left-0 top-0 w-[26.462px]" />
      <div className="absolute bg-[#2a6ff3] h-[71.859px] left-0 top-[45.51px] w-[26.462px]" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute h-[117.37px] left-[482.06px] top-[135.55px] w-[80.343px]">
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[151.904px] left-[26.94px] top-0 w-[26.462px]">
      <div className="absolute bg-[rgba(126,198,255,0.6)] h-[58.901px] left-0 top-0 w-[26.462px]" />
      <div className="absolute bg-[#2a6ff3] h-[93.002px] left-0 top-[58.9px] w-[26.462px]" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute h-[151.904px] left-[562.4px] top-[101.01px] w-[80.343px]">
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[205.863px] left-[26.94px] top-0 w-[26.462px]">
      <div className="absolute bg-[#eef2f6] h-[79.824px] left-0 top-0 w-[26.462px]" />
      <div className="absolute bg-[#2a6ff3] h-[126.038px] left-0 top-[79.82px] w-[26.462px]" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute h-[205.863px] left-[642.75px] top-[47.05px] w-[80.343px]">
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[132.479px] left-[26.94px] top-0 w-[26.462px]">
      <div className="absolute bg-[#eef2f6] h-[51.369px] left-0 top-0 w-[26.462px]" />
      <div className="absolute bg-[#2a6ff3] h-[81.109px] left-0 top-[51.37px] w-[26.462px]" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute h-[132.479px] left-[723.09px] top-[120.44px] w-[80.343px]">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[76.361px] left-[26.94px] top-0 w-[26.462px]">
      <div className="absolute bg-[rgba(126,198,255,0.6)] h-[29.609px] left-0 top-0 w-[26.462px]" />
      <div className="absolute bg-[#2a6ff3] h-[46.752px] left-0 top-[29.61px] w-[26.462px]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute h-[76.361px] left-[803.43px] top-[176.55px] w-[80.343px]">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[117.37px] left-[26.94px] top-0 w-[26.462px]">
      <div className="absolute bg-[#eef2f6] h-[45.511px] left-0 top-0 w-[26.462px]" />
      <div className="absolute bg-[#2a6ff3] h-[71.859px] left-0 top-[45.51px] w-[26.462px]" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute h-[117.37px] left-[883.78px] top-[135.55px] w-[80.343px]">
      <Frame14 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute h-[252.916px] left-0 top-0 w-[964.12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 964.12 252.916">
        <g id="Group 2411">
          <rect height="251.578" id="Rectangle 2" stroke="var(--stroke-0, #F1F1F1)" strokeDasharray="2.67 2.67" strokeWidth="1.33714" width="962.783" x="0.668571" y="0.668571" />
          <path d="M0 84.3047H964.12" id="Vector 2" stroke="var(--stroke-0, #F1F1F1)" strokeDasharray="2.67 2.67" strokeWidth="1.33714" />
          <path d="M0 168.613H964.12" id="Vector 4" stroke="var(--stroke-0, #F1F1F1)" strokeDasharray="2.67 2.67" strokeWidth="1.33714" />
          <g id="Group 2438">
            <path d={svgPaths.p4706b40} id="Vector 5" stroke="var(--stroke-0, #F1F1F1)" strokeDasharray="2.67 2.67" strokeWidth="1.33714" />
            <path d={svgPaths.p253c4900} id="Vector 6" stroke="var(--stroke-0, #F1F1F1)" strokeDasharray="2.67 2.67" strokeWidth="1.33714" />
            <path d={svgPaths.p37b56d80} id="Vector 23" stroke="var(--stroke-0, #F1F1F1)" strokeDasharray="2.67 2.67" strokeWidth="1.33714" />
          </g>
        </g>
      </svg>
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <div className="absolute bg-[#b4dfff] h-[80px] left-[26px] top-[100px] w-[28px]" />
      <Frame48 />
      <Frame49 />
      <Frame50 />
      <Frame51 />
      <Frame52 />
      <Frame53 />
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[80.343px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40.17px] not-italic text-[12px] text-black text-center top-0 whitespace-nowrap">Jan</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute h-[15px] left-[80.34px] top-0 w-[80.343px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40.17px] not-italic text-[12px] text-black text-center top-0 whitespace-nowrap">Feb</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute h-[15px] left-[160.69px] top-0 w-[80.343px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40.17px] not-italic text-[12px] text-black text-center top-0 whitespace-nowrap">Mar</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute h-[15px] left-[241.03px] top-0 w-[80.343px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40.17px] not-italic text-[12px] text-black text-center top-0 whitespace-nowrap">Apr</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute h-[15px] left-[321.37px] top-0 w-[80.343px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40.17px] not-italic text-[12px] text-black text-center top-0 whitespace-nowrap">May</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute h-[15px] left-[401.72px] top-0 w-[80.343px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40.17px] not-italic text-[12px] text-black text-center top-0 whitespace-nowrap">Jun¬</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute h-[15px] left-[482.06px] top-0 w-[80.343px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40.17px] not-italic text-[12px] text-black text-center top-0 whitespace-nowrap">Jul</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute h-[15px] left-[562.4px] top-0 w-[80.343px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40.17px] not-italic text-[12px] text-black text-center top-0 whitespace-nowrap">Aug</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute h-[15px] left-[642.75px] top-0 w-[80.343px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40.17px] not-italic text-[12px] text-black text-center top-0 whitespace-nowrap">Sep</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute h-[15px] left-[723.09px] top-0 w-[80.343px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40.17px] not-italic text-[12px] text-black text-center top-0 whitespace-nowrap">Oct</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute h-[15px] left-[803.43px] top-0 w-[80.343px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40.17px] not-italic text-[12px] text-black text-center top-0 whitespace-nowrap">Nov</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute h-[15px] left-[883.78px] top-0 w-[80.343px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[40.17px] not-italic text-[12px] text-black text-center top-0 whitespace-nowrap">Dec</p>
    </div>
  );
}

function Timeline() {
  return (
    <div className="absolute h-[15px] left-0 top-[263.61px] w-[964.12px]" data-name="Timeline">
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function ChartTimeline() {
  return (
    <div className="absolute bg-white h-[283px] left-[86.91px] overflow-clip top-[-0.09px] w-[964px]" data-name="Chart + Timeline">
      <Frame28 />
      <Timeline />
    </div>
  );
}

function ChartTimelineValue() {
  return (
    <div className="absolute bg-white h-[278.613px] left-[32.09px] overflow-clip top-[32.09px] w-[1050.817px]" data-name="Chart + Timeline + Value">
      <Frame21 />
      <ChartTimeline />
    </div>
  );
}

function NewRecharts() {
  return (
    <div className="absolute bg-white h-[372px] left-[-1px] overflow-clip top-[69px] w-[1115px]" data-name="New Recharts">
      <ChartTimelineValue />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[23.324px] left-[48px] top-[457px] w-[1050.817px]">
      <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex items-center left-[372px] overflow-clip py-[1.296px] top-0" data-name="Data Content">
        <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[20.733px]" data-name="Intetity Color Circle">
          <div className="absolute left-[5.18px] size-[10.366px] top-[5.18px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3664 10.3664">
              <circle cx="5.1832" cy="5.1832" fill="var(--fill-0, #2A6FF3)" id="Ellipse 2326" r="5.1832" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex items-center relative shrink-0" data-name>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[20.15px] text-black whitespace-nowrap">Messages sent</p>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex items-center left-[516.11px] overflow-clip py-[1.296px] top-0" data-name="Data Content">
        <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[20.733px]" data-name="Intetity Color Circle">
          <div className="absolute left-[5.18px] size-[10.366px] top-[5.18px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3664 10.3664">
              <circle cx="5.1832" cy="5.1832" fill="var(--fill-0, #EEF2F6)" id="Ellipse 2326" r="5.1832" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex items-center relative shrink-0" data-name>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[20.15px] text-black whitespace-nowrap">Responses</p>
        </div>
      </div>
    </div>
  );
}

function Table1() {
  return (
    <div className="absolute backdrop-blur-[20px] bg-[rgba(255,255,255,0.9)] border border-[#eaecf0] border-solid h-[502px] left-[24px] overflow-clip rounded-[12px] top-[709px] w-[1115px]" data-name="Table">
      <FiltersBar />
      <NewRecharts />
      <Frame2 />
    </div>
  );
}

function HorizontalTabs3() {
  return (
    <div className="absolute h-[49.222px] left-[815.89px] top-[15px] w-[279.111px]" data-name="Horizontal tabs">
      <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip px-[15.556px] py-[11.111px] rounded-[6px] top-0" data-name="_Tab button base">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26.667px] not-italic relative shrink-0 text-[#667085] text-[17.78px] whitespace-nowrap">Daily</p>
      </div>
      <div className="absolute bg-[#f8fafc] content-stretch flex items-center justify-center left-[83px] overflow-clip px-[15.556px] py-[11.111px] rounded-[6px] top-0" data-name="_Tab button base">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26.667px] not-italic relative shrink-0 text-[#202939] text-[17.78px] whitespace-nowrap">Monthly</p>
      </div>
      <div className="absolute content-stretch flex items-center justify-center left-[194px] overflow-clip px-[15.556px] py-[11.111px] rounded-[6px] top-0" data-name="_Tab button base">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26.667px] not-italic relative shrink-0 text-[#667085] text-[17.78px] whitespace-nowrap">Yearly</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute h-[79.222px] left-0 rounded-[12px] top-[-4.61px] w-[1115px]" data-name="Content">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[38px] left-[20px] not-italic text-[#101828] text-[24px] top-[20.61px] whitespace-nowrap">Top Products</p>
      <HorizontalTabs3 />
    </div>
  );
}

function FiltersBar1() {
  return (
    <div className="absolute bg-white border-[#eaecf0] border-b border-solid h-[70px] left-[-1px] top-[-1px] w-[1115px]" data-name="Filters bar">
      <Content2 />
    </div>
  );
}

function Table2() {
  return (
    <div className="absolute backdrop-blur-[20px] bg-[rgba(255,255,255,0.9)] border border-[#eaecf0] border-solid h-[678px] left-[35px] overflow-clip rounded-[12px] top-[1251px] w-[1115px]" data-name="Table">
      <FiltersBar1 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute bg-white h-[1892.514px] left-[316px] rounded-[20px] top-[20px] w-[1163px]">
      <Frame56 />
      <Frame43 />
      <Table1 />
      <Table2 />
    </div>
  );
}

export default function Frame31() {
  return (
    <div className="relative rounded-tl-[30px] rounded-tr-[20px] size-full">
      <Group2 />
      <Frame40 />
    </div>
  );
}