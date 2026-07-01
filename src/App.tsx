import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Laptop, 
  Calendar, 
  Clock, 
  Gift, 
  Award, 
  BookOpen, 
  ChevronRight, 
  Users, 
  ArrowUpRight, 
  Send, 
  FileText, 
  Heart, 
  User, 
  Check, 
  ExternalLink, 
  Clipboard, 
  Plus, 
  Building, 
  HelpCircle, 
  CheckCircle2,
  Compass,
  ArrowRight
} from 'lucide-react';

import { 
  SPEAKER_PROFILE, 
  TIMETABLE, 
  FAQS 
} from './data';

// @ts-ignore

const GOOGLE_FORM_URL = "https://forms.gle/caQC1yeMHkujsC7D9";

export default function App() {
  // Target date for countdown: July 24, 2026, 10:00:00 (KST is UTC+9)
  // Let's create countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });


  // Countdown clock effect
  useEffect(() => {
    const targetDate = new Date('2026-07-24T10:00:00+09:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);





  return (
    <div className="min-h-screen relative font-sans text-slate-100 selection:bg-neon-purple selection:text-black">
      {/* Background Decorative Stars and Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-sky-950/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[350px] h-[350px] bg-indigo-950/20 rounded-full blur-[130px]" />
        <div className="absolute top-[5%] right-[20%] text-slate-800/20 font-mono text-[10vw] font-bold select-none">&lt;/&gt;</div>
        <div className="absolute bottom-[15%] left-[5%] text-slate-800/15 font-mono text-[12vw] font-bold select-none">AI</div>
      </div>



      {/* Sticky Global Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-slate-950/85 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <span className="font-bold text-base text-white tracking-tight flex items-center gap-1.5">
                복지인사이트
                <span className="text-[10px] bg-indigo-500/10 text-neon-blue px-1.5 py-0.5 rounded font-medium border border-neon-blue/20">사회복지 버티컬 AI 기업</span>
              </span>
              <p className="text-[10px] text-slate-400">Social Welfare & Generative AI</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
            <a href="#intro" className="hover:text-neon-blue transition-colors">개요</a>
            <a href="#schedule" className="hover:text-neon-blue transition-colors">일정</a>
            <a href="#benefits" className="hover:text-neon-blue transition-colors">참가 혜택</a>
            <a href="#instructor" className="hover:text-neon-blue transition-colors">강사 소개</a>
            <a href="#pricing" className="hover:text-neon-blue transition-colors">신청 안내</a>
          </nav>

          <a 
            href={GOOGLE_FORM_URL} 
            target="_blank" 
            referrerPolicy="no-referrer" 
            className="flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-semibold text-xs py-2.5 px-4 rounded-lg transition-transform hover:-translate-y-0.5 shadow-md"
          >
            <span>입문반 강의 신청</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 z-10" id="intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Container */}
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Upper Badge Accent */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 shadow-inner mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-neon-blue animate-ping" />
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                국내 최초! 사회복지 현장을 위한 실습형 AI 축제
              </span>
            </motion.div>

            {/* Large Schedule Highlight right above title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-lg sm:text-2xl font-black text-neon-blue tracking-tight mb-3 flex flex-wrap items-center justify-center gap-2"
            >
              <span className="inline-block bg-neon-blue/20 text-neon-blue px-2.5 py-1 rounded text-xs sm:text-sm font-bold border border-neon-blue/30 animate-pulse">
                일정 안내
              </span>
              <span>7월 24일(금) 오전 10시 ~ 12시 [실시간 온라인 교육]</span>
            </motion.div>

            {/* Poster Exact Slogans Reconstructed */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
            >
              2026 사회복지 <br />
              <span className="bg-gradient-to-r from-gold-yellow via-neon-blue to-white bg-clip-text text-transparent">
                바이브코딩 입문반 강의
              </span>
            </motion.h1>

            {/* Premium Date & Location Highlight Banner Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-950/80 via-slate-900/95 to-purple-950/80 border-2 border-neon-blue/40 shadow-[0_0_25px_rgba(34,211,238,0.2)] max-w-2xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-neon-blue" />
                  <span className="text-sm sm:text-base font-bold text-white">
                    7월 24일(금) 오전 10시 ~ 12시 (2시간)
                  </span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-white/10" />
                <div className="flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-neon-purple" />
                  <span className="text-sm sm:text-base font-bold text-neon-blue">
                    줌(Zoom) 실시간 온라인 교육
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl font-bold text-gold-yellow mb-5 tracking-tight"
            >
              "현장을 아는 사회복지사가 직접 만드는 AI 웹앱. <br className="sm:hidden" />실무를 가장 잘 아는 사람이 가장 좋은 AI를 만듭니다"
            </motion.p>

            {/* Blockquote Quote */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative py-5 px-6 sm:px-12 rounded-2xl bg-white/[0.03] border border-white/5 max-w-3xl mx-auto mb-10 text-slate-300"
            >
              <span className="absolute top-2 left-4 text-5xl font-serif text-neon-purple/20">“</span>
              <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                코딩을 한 번도 해보지 않은 사회복지사들이 오직 인공지능(AI)과 대화만을 활용해, 복지 현장에서 즉각 작동하는 전용 웹앱을 원클릭으로 만들어보는 실습 체험이 진행됩니다. 사회복지 바이브코딩 축제에 귀하를 초대합니다!
              </p>
              <span className="absolute bottom-2 right-4 text-5xl font-serif text-neon-purple/20">”</span>
            </motion.div>

            {/* Timer Countdown Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-6 rounded-2xl max-w-lg mx-auto mb-10 shadow-2xl relative overflow-hidden"
            >
              {/* Starry subtle glow behind countdown */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="text-xs sm:text-sm text-slate-400 font-semibold tracking-wider flex items-center justify-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-neon-blue animate-pulse" />
                  <span>실시간 선착순 마감 카운트다운 — 7월 24일 오전 10시 정각 개시</span>
                </div>
                
                <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-sm mx-auto">
                  <div className="bg-slate-900/80 rounded-xl p-2 sm:p-3 border border-white/5">
                    <span className="block font-mono text-xl sm:text-3xl font-bold text-white">{timeLeft.days}</span>
                    <span className="text-[10px] text-slate-400">일</span>
                  </div>
                  <div className="bg-slate-900/80 rounded-xl p-2 sm:p-3 border border-white/5">
                    <span className="block font-mono text-xl sm:text-3xl font-bold text-neon-blue">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-400">시간</span>
                  </div>
                  <div className="bg-slate-900/80 rounded-xl p-2 sm:p-3 border border-white/5">
                    <span className="block font-mono text-xl sm:text-3xl font-bold text-neon-purple">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-400">분</span>
                  </div>
                  <div className="bg-slate-900/80 rounded-xl p-2 sm:p-3 border border-white/5">
                    <span className="block font-mono text-xl sm:text-3xl font-bold text-gold-yellow animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-400">초</span>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-sky-400 mt-4 font-semibold tracking-tight">
                  💡 한정된 인원으로 선착순 마감될 수 있습니다.
                </p>
              </div>
            </motion.div>

            {/* Crucial CTA Links */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center justify-center gap-3 max-w-2xl mx-auto mt-4"
            >
              <motion.a 
                href={GOOGLE_FORM_URL}
                target="_blank"
                referrerPolicy="no-referrer"
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 20px rgba(34, 211, 238, 0.4), 0 0 5px rgba(168, 85, 247, 0.2)",
                    "0 0 35px rgba(34, 211, 238, 0.8), 0 0 20px rgba(168, 85, 247, 0.5)",
                    "0 0 20px rgba(34, 211, 238, 0.4), 0 0 5px rgba(168, 85, 247, 0.2)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.04,
                  boxShadow: "0 0 50px rgba(239, 68, 68, 0.9), 0 0 30px rgba(245, 158, 11, 0.8)",
                  borderColor: "#f87171"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 text-slate-950 hover:text-white font-black text-xl sm:text-2xl py-6 px-10 rounded-2xl cursor-pointer text-center border-2 border-cyan-300 relative overflow-hidden group select-none transition-colors duration-300"
              >
                {/* Red gradient overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-rose-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
                {/* Glossy shine overlay sweep effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-2 justify-center pointer-events-none">
                  🚀 지금 바로 [7/24 강의] 구글폼 신청하기 (선착순)
                </span>
                <ArrowRight className="relative z-10 w-7 h-7 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] shrink-0 group-hover:translate-x-1.5 transition-transform pointer-events-none" />
              </motion.a>
              <p className="text-xs sm:text-sm text-cyan-300 font-bold tracking-tight mt-1 animate-pulse">
                👇 위 버튼을 클릭하여 복지인사이트 공식 신청 구글폼을 작성해주세요.
              </p>
            </motion.div>

          </div>

          {/* Quick Summary Meta Grid From Poster Footer */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16 sm:mt-24 max-w-5xl mx-auto text-center">
            
            <div className="glass-panel p-5 rounded-xl flex flex-col justify-between border border-white/5 hover:border-neon-blue/20 transition-all">
              <div className="mx-auto p-2 bg-sky-500/10 rounded-lg text-neon-blue w-max mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-400 block mb-1">일시</span>
              <p className="font-bold text-sm sm:text-base text-white">7/24 (금) 10~12시</p>
              <p className="text-[10px] text-slate-400 mt-0.5">(2시간 Zoom 온라인)</p>
            </div>

            <div className="glass-panel p-5 rounded-xl flex flex-col justify-between border border-white/5 hover:border-neon-purple/20 transition-all">
              <div className="mx-auto p-2 bg-purple-500/10 rounded-lg text-neon-purple w-max mb-3">
                <Gift className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-400 block mb-1">수강생 특별 혜택</span>
              <p className="font-bold text-sm sm:text-base text-white">사회복지 웹앱 50선 제공</p>
              <p className="text-[10px] text-slate-400 mt-0.5">(수강생 전원 즉시 제공)</p>
            </div>

            <div className="glass-panel p-5 rounded-xl flex flex-col justify-between border border-white/5 hover:border-cyan-400/20 transition-all">
              <div className="mx-auto p-2 bg-cyan-500/10 rounded-lg text-cyan-400 w-max mb-3">
                <Laptop className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-400 block mb-1">실습 난이도</span>
              <p className="font-bold text-sm sm:text-base text-white">초급</p>
              <p className="text-[10px] text-slate-400 mt-0.5">(노트북 및 구글 계정 준비)</p>
            </div>

            <div className="glass-panel p-5 rounded-xl flex flex-col justify-between border border-white/5 hover:border-emerald-400/20 transition-all">
              <div className="mx-auto p-2 bg-emerald-500/10 rounded-lg text-emerald-400 w-max mb-3">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-400 block mb-1">참가 대상</span>
              <p className="font-bold text-sm sm:text-base text-white">현직 사회복지사</p>
            </div>

            <div className="glass-panel p-5 rounded-xl flex flex-col justify-between border border-white/5 hover:border-gold-yellow/20 transition-all col-span-2 md:col-span-1">
              <div className="mx-auto p-2 bg-yellow-500/10 rounded-lg text-gold-yellow w-max mb-3">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-400 block mb-1">참가비</span>
              <p className="font-bold text-sm sm:text-base text-gold-yellow">50,000원</p>
              <p className="text-[10px] text-slate-400 mt-0.5">(부가세 전액 포함)</p>
            </div>

          </div>

        </div>
      </section>

      {/* Course Program 2-part Schedule */}
      <section className="py-20 relative bg-slate-950/40 border-t border-white/5" id="schedule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-purple tracking-widest uppercase block mb-2">행사 커리큘럼</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              단 2시간! 밀도 높은 입문반 교육 구성
            </h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">
              오전 10시부터 12시까지 지루할 틈 없이 전개되는 온라인 실습 프로그램표입니다. 
              각 주차별 최고의 사례 공유와 실습 시간이 정밀하게 안배되었습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TIMETABLE.map((part, index) => {
              return (
                <div 
                  key={index}
                  className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-indigo-400/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-3xl font-black bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                        {part.part}
                      </span>
                      <span className="text-xs font-semibold bg-slate-900 text-slate-300 py-1 px-2.5 rounded-full border border-white/5">
                        {part.time}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                      {part.title}
                    </h4>
                    <p className="text-xs text-slate-400 mb-4 font-normal leading-relaxed">
                      {part.desc}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[11px] text-neon-blue font-bold tracking-wider mb-2 block uppercase">핵심 학습 목록</span>
                    <ul className="space-y-2">
                      {part.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300 text-xs">
                          <Check className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                          <span className="leading-normal">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Course Benefits & Poster Deliverables */}
      <section className="py-20" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-neon-blue tracking-widest uppercase block mb-2">참가 특전 및 제공 사항</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              참가를 통해 획득하는 실무 고도화 패키지
            </h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">
              참가비 이상의 가치를 지닌, 일상의 단순 복지 행정 스트레스를 덜 수 있도록 엄선된 핵심 수록 지침들을 참가자 전원에게 공식 전달해 드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex gap-4">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-neon-purple h-max shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1.5">사회복지 웹앱 50선 제공</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  사례회의록 가공, 상담일지 정제, 사업 계획 검토서 등 현직에서 바로 실무에 접목 및 활용 가능한 실제적인 고도화 웹앱 50선 증정!
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex gap-4">
              <div className="p-3 bg-rose-500/10 rounded-xl text-rose-400 h-max shrink-0">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1.5">바이브코더 웹앱 제공</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  사회복지 현장 맞춤형 생성 AI 연동을 정교하게 도와 실무 비서 가동을 원활하게 이끄는 유용한 프롬프트 템플릿 실무 도구 제공!
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex gap-4">
              <div className="p-3 bg-sky-500/10 rounded-xl text-neon-blue h-max shrink-0">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1.5">사회복지 웹앱 50선 제공</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  가계도 생성기, AI 스튜디오, 성과분석 대시보드 등 복지 현장에서 즉시 활용할 수 있고 커스터마이징 가능한 혁신적 사회복지 웹앱 50선 전격 수록 및 제공!
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 h-max shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1.5">참가자 한정 사회복지 챗GPT 스터디 톡방 초대</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  일회성 수강에 머물지 않고 교육 이후에도 챗GPT 실무 훈련과 실제 혁신 노하우를 자유롭게 나누고 질문하며 함께 공부할 참가자 전용 단톡방 초대권 제공.
                </p>
              </div>
            </div>

          </div>



        </div>
      </section>

      {/* Speaker Instructor Profile (이창희 대표) */}
      <section className="py-20 bg-slate-900/30 border-t border-white/5" id="instructor">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Profile Visual avatar decoration */}
            <div className="lg:col-span-5 text-center">
              <div className="relative inline-block">
                {/* Visual border glow outline */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-purple-500 blur-xl opacity-30 transform scale-105" />
                
                <div className="relative bg-slate-950 p-6 rounded-3xl border border-white/10 shadow-2xl space-y-4">
                  
                  {/* Avatar Represented as graphic card */}
                  <div className="w-36 h-36 bg-gradient-to-b from-indigo-900 to-slate-900 border-2 border-indigo-400/30 rounded-full mx-auto flex items-center justify-center text-slate-100 shadow-inner overflow-hidden">
                    <User className="w-20 h-20 text-indigo-300/80 mt-1" />
                  </div>
                  
                  <div>
                    <span className="text-xs text-neon-blue font-bold tracking-widest block uppercase">복지인사이트 대표</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">{SPEAKER_PROFILE.name} 대표</h3>
                    <p className="text-xs text-indigo-300/80 font-semibold mt-1">사회복지 생성 AI 실무 교육 전문가</p>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-xl border border-white/5 text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                     "사회복지 현장의 AI 적용점을 연구하고 교육 커리큘럼을 개발하고 있습니다."
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column Profile Career points */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-neon-purple tracking-widest block uppercase mb-1.5">강사 이력 및 경력</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  바이브코딩으로 사회복지 실무를 가장 빠르게 혁신하는 방법을 제시합니다
                </h3>
              </div>

              {SPEAKER_PROFILE.careers.map((careerSection, cIdx) => (
                <div key={cIdx} className="space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-3.5 bg-indigo-500 rounded-full" />
                    {careerSection.title}
                  </h4>
                  <ul className="space-y-2 pl-1">
                    {careerSection.items.map((careerPoint, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 shrink-0" />
                        <span>{careerPoint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* Pricing & Scissors Scannable Ticket Style Panel */}
      <section className="py-20 radial-glow" id="pricing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-2">
              입문반 교육 정규 마감 특별 혜택가
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              선착순 사전 우대 혜택 적용 티켓 정보입니다. 단체 신청 정산 및 견적서 발행 가능합니다.
            </p>
          </div>

          <div className="bg-slate-900/90 rounded-2xl border-2 border-dashed border-indigo-500/30 overflow-hidden shadow-2xl relative">
            
            {/* Top Side Ticket Badge */}
            <div className="bg-gradient-to-r from-indigo-900 to-slate-950 p-4 border-b border-indigo-900/40 flex justify-between items-center text-xs">
              <span className="font-bold text-neon-blue font-mono tracking-widest uppercase">2026 EVENT ACCESS PASS</span>
              <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-400/20">신청 가능</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Ticket details right */}
              <div className="md:col-span-8 p-6 sm:p-8 space-y-4">
                <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">온라인 줌 생중계 교육권</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  사회복지 바이브코딩 입문반 강의 티켓
                </h3>
                
                <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                  <div>
                    <span className="text-slate-400 block">행사 개최 일시</span>
                    <strong className="text-slate-200 block mt-0.5">7월 24일 오전 10시~12시</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">실습 진행 환경</span>
                    <strong className="text-slate-200 block mt-0.5">온라인 Zoom 원격 클래스</strong>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="text-xs text-slate-300 font-semibold block mb-2">티켓 포함 혜택 내역</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-neon-blue" />
                      <span>사회복지 웹앱 50선 제공</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-neon-blue" />
                      <span>바이브코더 웹앱 제공</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-neon-blue" />
                      <span>전용 실무 강의안 PDF 제공</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-neon-blue" />
                      <span>실시간 QA 이창희 대표 즉문즉답</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-neon-blue" />
                      <span>사회복지 챗GPT 스터디 톡방 초대</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Price Tag with scissor left cut design */}
              <div className="md:col-span-4 p-6 sm:p-8 bg-slate-950/80 border-t md:border-t-0 md:border-l-2 border-dashed border-indigo-500/30 flex flex-col justify-center items-center text-center">
                <span className="text-xs text-slate-400 block mb-1">인원 초과 전 혜택 특가</span>
                <p className="text-3xl sm:text-4xl font-black text-rose-400 tracking-tight">
                  50,000원
                </p>
                <span className="text-[10px] text-slate-500 block mt-1">(부가세 영수증 발급 가능)</span>
                
                <motion.a 
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  animate={{
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      "0 0 15px rgba(34, 211, 238, 0.3), 0 0 5px rgba(168, 85, 247, 0.1)",
                      "0 0 30px rgba(34, 211, 238, 0.7), 0 0 15px rgba(168, 85, 247, 0.4)",
                      "0 0 15px rgba(34, 211, 238, 0.3), 0 0 5px rgba(168, 85, 247, 0.1)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    scale: 1.04,
                    boxShadow: "0 0 40px rgba(239, 68, 68, 0.8), 0 0 20px rgba(245, 158, 11, 0.7)",
                    borderColor: "#f87171"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-400 via-indigo-600 to-neon-purple text-slate-950 hover:text-white font-black text-sm sm:text-base py-4 px-6 rounded-2xl transition-all text-center block mt-6 cursor-pointer border border-cyan-300 relative overflow-hidden group select-none"
                >
                  {/* Red gradient overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-rose-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
                  {/* Glossy shine overlay sweep effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                  <span className="relative z-10 flex items-center justify-center gap-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    🔥 구글폼 간편 수강신청 바로가기
                  </span>
                </motion.a>
              </div>

            </div>

            {/* Simulated barcode */}
            <div className="bg-slate-950/40 p-2.5 text-center sm:text-right border-t border-indigo-900/20 text-[9px] text-slate-500 font-mono tracking-widest uppercase">
              BOKJI INSIGHT FESTIVAL CODES: 20260703-VIBE-AI-CODING-SEOUL
            </div>

          </div>

        </div>
      </section>

      {/* Expandable FAQs Accordion */}
      <section className="py-20 bg-slate-900/40 border-t border-white/5" id="questions">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-neon-purple tracking-widest uppercase block mb-2">자주 묻는 질문</span>
            <h2 className="text-3xl font-black text-white">
              바이브코딩 입문반 교육 FAQ
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-3">
              학습 진행 방식, 단체 수강, 참가비 영수증 발행과 관련한 주요 궁금증을 모았습니다.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              return (
                <FAQRow key={idx} question={faq.question} answer={faq.answer} />
              );
            })}
          </div>

        </div>
      </section>

      {/* Standard Footer with business information */}
      <footer className="bg-slate-950 py-12 text-slate-500 text-xs border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8 border-b border-white/5 pb-8">
            <div className="text-center sm:text-left">
              <span className="font-extrabold text-white text-sm block">복지인사이트</span>
              <p className="text-[11px] text-slate-400 mt-1">사회복지 버티컬 AI 기업</p>
            </div>
            <div className="flex gap-4">
              <a href={GOOGLE_FORM_URL} target="_blank" referrerPolicy="no-referrer" className="text-[11px] text-neon-blue hover:underline">
                구글식 참가 신청
              </a>
              <span>|</span>
              <span className="text-[11px] text-slate-400">
                출강 및 특강 문의 : mediahelper2020@gmail.com
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] gap-4">
            <div>
              <p>© 2026 복지인사이트. All rights reserved. Created for Korean Social Worker AI Festa Campaign.</p>
              <p className="mt-1 text-slate-600">본 웹사이트는 2026 사회복지 바이브코딩 입문반 강의 공식 안내를 대행하는 신청 플랫폼입니다.</p>
            </div>
            <div className="text-slate-600 font-mono">
              Vibe Coding Engine v1.2.6
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

// Single Accordion FAQ Row Component with state
function FAQRow({ question, answer }: { question: string, answer: string, key?: React.Key }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-panel rounded-xl border border-white/5 overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-5 text-left font-bold text-sm sm:text-base text-white flex justify-between items-center hover:bg-white/[0.02] cursor-pointer"
      >
        <span>{question}</span>
        <div className={`p-1 bg-white/5 rounded transition-transform duration-300 ${open ? 'rotate-180 text-neon-purple' : 'text-slate-400'}`}>
          <Plus className="w-4 h-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="p-5 pt-0 border-t border-white/5 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal whitespace-pre-line bg-slate-950/20">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
