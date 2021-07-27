import React, { useState, useRef } from 'react';
import { Link, BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import './App.css';
import './index.css';
import ReactPlayer from 'react-player/youtube'
import Slider from '@material-ui/core/Slider';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Props } from './App'

interface YouTubeProps {
  ref: any
  url: string
  width: string
  height: string
  // pip: boolean
  playing: boolean
  // controls: boolean
  // light: boolean
  // volume: number
  // muted: boolean
  played: any
  // loaded: number
  // duration: number
  // playbackRate: number
  loop: boolean
  // seeking: boolean
  playbackRate: number
}

interface PointProps {
  start: number
  end: number
}

const VIDEO_URL = 'https://www.youtube.com/watch?v='

const YouTube:React.FC<Props> = ({ states }) => {

  const inputRange = useRef<any>('');
  const [ state, setState ] = useState<YouTubeProps>({
    ref: inputRange,
    url: VIDEO_URL + states.val,
    width: '100%',
    height: '100%',
    loop: false,
    played: {
      played: 0
    },
    playing: false,
    playbackRate: 1
  })
  const [ duration, setDuration ] = useState<number>(0)
  const [ point, setPoint ] = useState<PointProps>({
    start: 0,
    end: duration
  })
  const [ partialRepeat, setPartialRepeat ] = useState(false)
  const [ delay, setDelay ] = useState(1)
  const [ caption, setCaption ] = useState('en')

  const handleReady = () => {
    console.log(point.start)
    inputRange.current.seekTo(point.start);
  }

  const handlePlayAndPause = () => {
    if(!state.playing){
      handleReady()
      setState({ ...state, playing: true })
    } else {
      setState({ ...state, playing: false })
    }
  }
  
  const handleStart = () => {
    console.log('start!')
    setDuration(inputRange.current.getDuration())
    handleReady()
  }

  const handlePlayStart = () => {
    console.log('PlayStart!')
    handleReady()
  }

  let timer:any
  const handleEnded = () => {
    console.log('end!')
    setState({ ...state, playing: false })
    handleReady()
    
    clearTimeout(timer)
    timer = setTimeout(
      () => { 
        setState({ ...state, playing: true })
      }, 500
    )
  }
  const handleSeekChange = (e:any) => {
    setState({ 
      ...state,
      played: parseFloat(e.target.value) 
     })
  }

  const handleSeekMouseSlide = (val:any) => {
     inputRange.current.seekTo(parseFloat(val));
  }

  const forceRepeat = (current:number) => {
    if(!partialRepeat) return
    
    if(current > point.end){
      console.log('fire!')
      handleReady()
      setState({ ...state, playing: false })
      clearTimeout(timer)
      timer = setTimeout(
        () => { 
          setState({ ...state, playing: true })
        }, 500
      )
    }
  }

  const handleProgress = (progress:any) => {
    setState({
      ...state,
      played: progress
    })
    console.log('now: ', progress.playedSeconds)
    forceRepeat(progress.playedSeconds)
  }
  const AmountSlider = createTheme({
    overrides: {
      MuiSlider: {
        root: {
          height: 10
        },
        thumb: {
          height: 26,
          width: 26
        },
        track: {
          height: 20,
          borderRadius: 10
        },
        rail: {
          height: 20,
          borderRadius: 10
        }
      }
    }
  });

  const handleCommitted = (event: object, value: number | number[]) => {
    if(Array.isArray(value)) return
    const count = value * 0.01
    setState({
      ...state,
      played: {
        played: count
      }
    })
    handleSeekMouseSlide(count)
  }

  const swithPlayIcon = () => {
    if(!state.playing){
      return 'Play'
    } else {
      return 'Stop'
    }
  }

  const handleSpeed = () => {
    const count = delay - 0.1
    if(0.7 < count){
      setDelay(Number((count).toFixed(1)))
    } else {
      setDelay(1)
    }
    setState({ ...state, playbackRate: delay })
  }

  // const handleStartPoint = (e:any) => {
  //   setPoint({ ...point, start: e.target.value })
  // }
  // const handleEndPoint = (e:any) => {
  //   setPoint({ ...point, end: e.target.value })
  // }

  // const handlePartialRepeat = () => {
  //   if(!partialRepeat){
  //     setPartialRepeat(true)
  //   } else {
  //     setPartialRepeat(false)
  //   }
  // }
  // const switchRepeat = () => {
  //   if(partialRepeat){
  //     return 'is-active'
  //   } else {
  //     return ''
  //   }
  // }
  
  let history = useHistory()

  const onClickCaption = () => {
    if(caption === 'en'){
      setCaption('jp')
    } else {
      setCaption('en')
    }
  }

  const captions = () => {
    if(caption === 'en') {
      return (
        <div className="captions__tabsContents">
          <dl>
            <dt>00:04</dt>
            <dd>I first tried online dating my freshman year of college, which was in 2001, in case you can't see my wrinkle. Now, as you may have noticed, I'm six-feet tall, and when I arrived at my chosen university and realized our men's Division III basketball team averaged five-foot-eight, I abandoned the on-campus scene and went online. Now, back then, online dating was pretty close to the plot of "You've Got Mail." You'd write long emails back and forth for weeks, before you finally met up in real life. Except, in my case, you'd realize you have no chemistry and so now, you're back to square one. </dd>
          </dl>

          <dl>
            <dt>00:38</dt>
            <dd>So, while online dating has changed a lot in the last 17 years, many of the frustrations remain the same. Because here's what it does well. It broadens your pool of potential dates beyond your existing social and professional circles. And here's what it doesn't do well. Literally everything else. </dd>
          </dl>

          <dl>
            <dt>00:57</dt>
            <dd>(Laughter) </dd>
          </dl>

          <dl>
            <dt>00:59</dt>
            <dd>A few things you should know about me: I'm an action-oriented overachieving math and theater nerd, who ended up with an MBA. So, when things aren't working out, I tend to take a step back, apply my business toolkit to figure out why, and to fix it. My love life was no exception. </dd>
          </dl>

          <dl>
            <dt>01:15</dt>
            <dd>The summer before I turned 30, I took myself on a relationship off-site. Which means I went camping solo in Maine for a week, to do a retro on my track record of mediocre relationships. Because the thing was, I knew what I wanted in a partner. Kindness, curiosity, empathy, a sense of purpose. And yet, here's what I chose for online: Ivy League degree, six feet or taller, lives within 12 subway stops of me. It's not that I intentionally prioritized those things, it's just the easiest to vet for online. It kind of is like a résumé review, which is why these guys looked great on paper and never quite fit me. </dd>
          </dl>

          <dl>
            <dt>01:55</dt>
            <dd>So when I went back online in the spring of 2016, I decided to reengineer the process through some classic business tools. First, I went to OkCupid, because I wanted to avoid the gamification of swipe-based apps. And also, because I wanted a writing sample. Next, I set up a sales funnel, throwing out any sense of my type, and instead defining the criteria that would qualify a lead. An inbound message had to do three things: had to be written in complete sentences and with good grammar; it had to reference something in my profile, so I know it's not a copy-and-paste situation; and it had to avoid all sexual content. I figured this was a pretty low bar, but it turns out, of my 210 inbound messages, only 14 percent cleared that hurdle. </dd>
          </dl>

          <dl>
            <dt>02:38</dt>
            <dd>(Laughter) </dd>
          </dl>

          <dl>
            <dt>02:39</dt>
            <dd>Next, I wanted to meet in real life as quickly as possible, because the things I cared about, I couldn't see online. But the research, and my experience, shows you only need about 30 seconds with someone to tell if you click. </dd>
          </dl>

          <dl>
            <dt>02:52</dt>
            <dd>So I invented the zero date. The zero date is one drink, one hour. With the goal of answering one question: Would I like to have dinner with this person? Not "are they the one"? Literally, "Would I like to spend three hours across the table from this person?" You tell them you have a hard stop -- drinks with girlfriends, a conference call with China -- it doesn't matter, they don't know you. The point is one hour. If it's awesome, you schedule a first date. And if it's not awesome, you downshift into entertainer mode and you workshop a few new stories for your next networking event. </dd>
          </dl>

          <dl>
            <dt>03:27</dt>
            <dd>Plus, because it's just an hour, you can squeeze up to three in one evening and then you only have to do your hair and pick out one great outfit a week. </dd>
          </dl>

          <dl>
            <dt>03:34</dt>
            <dd>The zero date also gave me a chance to see how they responded to me asking them out. I figured not everyone would dig my moxie, and I was right. Of my 29 qualified leads, only 15 replied to my message, and of those, six scheduled a zero date. </dd>
          </dl>

          <dl>
            <dt>03:49</dt>
            <dd>My first zero date was with a set designer. And we were both into yoga and preferred our bagels with peanut butter, so it looked pretty promising. But two minutes in, I could tell it wasn't going to be a thing and I was relieved not to be spending dinner with him. After that, I was a little nervous about going to my next zero date. But we had agreed to meet on the Brooklyn Heights Promenade with a flask of whiskey to watch the sunset, and honestly, it was two blocks from my apartment. Plus, this guy had a podcast, I have a podcast, worst case scenario, we can talk about our podcasts. </dd>
          </dl>

          <dl>
            <dt>04:18</dt>
            <dd>Then, Chas set down next to me. And this kind and empathetic man told great jokes and asked even better questions. He was a lawyer and a writer, and his eyes twinkled when he laughed and they squeezed tight when I kissed him and at some point in the evening, our zero date became a first date. And two years later, we have a washer, dryer and two house plants together. </dd>
          </dl>

          <dl>
            <dt>04:41</dt>
            <dd>Now, I can't promise you're going to end up with house plants. But the point of this story is that online dating doesn't have to suck. Don't treat it like a game, and don't treat it like a resume review. Instead, use it to source and qualify leads and then get offline as quickly as possible with the zero date. Because the point of this isn't swiping. It's finding your person. </dd>
          </dl>

          <dl>
            <dt>05:04</dt>
            <dd>Good luck. </dd>
          </dl>
        </div>
      )
    } else {
      return (
        <div className="captions__tabsContents">
          <dl>          
            <dt>00:04</dt>
            <dd>はじめて出会い系サイトを試したのは 大学１年の時でした シワが見えない人のために言っておくと 2001年のことです 見てのとおり 私は 身長180cm超えで 志望大学に入学後 バスケットボール男子選手の全米平均が ディビジョン３では約173cmだと知って 大学内での恋愛を諦め インターネットに懸けました 当時の出会い系は 『ユー・ガット・メール』の筋書きと だいたい同じでした 何週間も 長文メールをやり取りし その後 ようやくご対面です とはいえ 私の場合は 相性が合わないと気づき 振り出しに戻っていました </dd>
          </dl>
          <dl>
            <dt>00:38</dt>
            <dd>出会い系は ここ17年で 大きく変わりましたが イライラ要素の多くは変わっていません なぜなら 出会い系が得意とするのは その人の社会・職業的な活動範囲を超えて 恋人候補を増やすことだからです では 出会い系が不得意なのは？ まさに その他すべて です </dd>
          </dl>
          <dl>
            <dt>00:57</dt>
            <dd>（笑） </dd>
          </dl>
          <dl>
            <dt>00:59</dt>
            <dd>私について少し補足すると 私は行動的で つい頑張りすぎるタイプの 数学・演劇オタクで 経営学修士号を持ってます だから うまくいかない時は 一歩離れて ビジネスで用いる手法で 問題点を見つけ 解決します 恋愛においても同じです </dd>
          </dl>
          <dl>
            <dt>01:15</dt>
            <dd>30歳になる前の夏 彼氏探しを一時休止して メイン州に１週間 一人でキャンプに出かけ 自分のさえない恋愛遍歴を 振り返りました パートナーに何を求めるか 本当は自分で分かってたんです 優しさ、好奇心、共感、目的意識です でも ネット上で選んでいたのは アイビーリーグ（一流大学）卒 自分より高身長 うちから12駅以内に住んでる人 でした こういう条件を意識的に 優先してたわけではありません ネット上で一番チェックしやすい 項目だっただけです 履歴書を見るようなもので 字面では すごく良く見えるけど 実際は自分となかなか合いません </dd>
          </dl>
          <dl>
            <dt>01:55</dt>
            <dd>そこで 2016年の春 私はネットに戻り 典型的なビジネスの手法で このプロセスを再構築することにしました まず OkCupidを使いました スワイプ式アプリの ゲーム感覚は避けたかったのと 相手が書いた文章を見て 品定めするためです 次に「潜在顧客」を絞りました 自分の好みのタイプを選ぶことは止め 相性が良い「見込み客」を特定する基準を 定義したのです ３つの条件を満たすメールのみ 合格としました 正しい文法で書かれた 完全文で構成されていること 私のプロフィールに言及していること コピペじゃないと確かめるためです そして 性的な内容がないこと 条件としては緩いはずだと思っていたら 私が受け取ったメッセージ210件のうち クリアしたのは なんと たったの14%でした </dd>
          </dl>
          <dl>
            <dt>02:38</dt>
            <dd>（笑） </dd>
          </dl>
          <dl>
            <dt>02:39</dt>
            <dd>次の段階としては なるべく早く実際に会うこと 私が気にするようなことは ネットでは分からないからです でも 調査や自分の経験からして たった30秒ほどあれば その人と うまが合うかどうか分かります </dd>
          </dl>
          <dl>
            <dt>02:52</dt>
            <dd>そこで考案したのが 「ゼロデート」です これは１時間そして１ドリンクで 次の質問の答えを出すというものです 「この人とディナーしたいか？」です 「運命の人か？」ではなく そのまんま 「テーブルを挟んで３時間 この人と過ごしたいか？」です 本当に１時間しかないと伝えます 女友達と飲み会があるとか 中国との電話会議とか 何でもいいです バレませんから 「１時間」というのが大事なのです もし いい感じだったら 最初のデート日を決めましょう そうじゃなければ 接待モードでやり過ごして 次の社交場で話のネタにすれば良いんです </dd>
          </dl>
          <dl>
            <dt>03:27</dt>
            <dd>しかも １時間だけなので 一晩に３人と会うこともできます そうすれば ヘアセットや洋服選びも 週に１回で済みますよね </dd>
          </dl>
          <dl>
            <dt>03:34</dt>
            <dd>ゼロデートでは 私から会おうと 誘った時の相手の反応も 見ることができました 本気モードに食いつかない人もいるだろうと 予想したところ 当たってました 29人の候補者のうち 私に返信したのは15人だけで ゼロデートの約束に至ったのは そのうち６人でした </dd>
          </dl>
          <dl>
            <dt>03:49</dt>
            <dd>最初の相手は 舞台セットデザイナーでした お互い ヨガにハマってて ピーナツバター入りベーグルが 好きだったので かなり期待できそうでした でも２分で この人とは 合わなそうだと分かり ディナーをしないで済んで ホッとしました その後は 次のゼロデートに 少し臆病になりましたが ブルックリンハイツで会うことが 既に決まってました ウィスキーを携帯して 夕日を眺めるというもので 正直言うと うちから ２ブロックの距離だったし 相手も私も ポッドキャストを配信してたので 最悪の場合 それについて 話せばいいと思いました </dd>
          </dl>
          <dl>
            <dt>04:18</dt>
            <dd>こうして会った彼がチャスです 優しくて 共感力も高く 冗談もうまくて 質問はもっと上手でした 彼は弁護士で 作家で 笑うと目がキラキラして 私からキスしたら 目をギュッと閉じました その晩 ゼロデートは初デートに変わり ２年後 私たちは洗濯機と乾燥機と ２つの観葉植物を共有しています </dd>
          </dl>
          <dl>
            <dt>04:41</dt>
            <dd>さて 観葉植物がついてくるかは お約束できませんが この話の要点は 出会い系は悪いことばかりじゃない ということです ゲームや履歴書のように扱わずに 「見込み客」を見つけ 絞るために使いましょう そして なるべく早くオフラインの ゼロデートに持ち込んでください だって 出会いの目的は スワイプすることじゃなく 自分に合う人を見つけることですから </dd>
          </dl>
          <dl>
            <dt>05:04</dt>
            <dd>頑張ってください </dd>
          </dl>
          <dl>
            <dt>05:06</dt>
            <dd>（拍手） </dd>
          </dl>            
        </div>
      )
    }
  }

  return (
    <div className="App">

      <header className="header">
        <button 
          type="button"
          className="header__button"
          onClick={() => history.push('/')}>＜Back</button>
      </header>
        
      <div className="player isYouTube">
        <div className='player-wrapper'>
          <ReactPlayer 
          className='react-player' 
          {...state}
          onProgress={handleProgress} 
          // onReady={handleReady}
          // onEnded={() => handleEnded()}
          // onStart={handleStart}
          // onPlay={handlePlayStart}
          />
        </div>

        <div className="player-ui">
          <ThemeProvider theme={AmountSlider}>
            <div className="px-2">
              <Slider 
                value={state.played.played * 100}
                aria-labelledby="continuous-slider"
                // onChange={handleSeekChange}
                // onChangeCommitted={(event, value) => handleCommitted(event, value)}
                />
            </div>
          </ThemeProvider>

          <div className="main-buttons">
            <button
              className="bg-green-500 border-green-500 hover:bg-green-600 text-white text-lg font-bold py-4 px-10 rounded-full"
              onClick={() => handlePlayAndPause()}>
              {swithPlayIcon()}
            </button>
            {/*<button 
              className="mx-auto border border-gray-300 rounded-md text-md font-medium py-2 px-2 text-gray-500 dark:border-gray-600 dark:text-gray-400"
              onClick={() => handleSpeed()}>
                SPEED: { state.playbackRate }
            </button>
            <div className="main-buttons__second">{duration}/s</div>*/}
          </div>
        
          {/*<div className={["repeat", switchRepeat()].join(' ')}>
            <div className="repeat__button">
              <button 
              className="mx-auto border border-gray-300 rounded-md text-lg font-medium py-2 px-3 text-gray-500 dark:border-gray-600 dark:text-gray-400"
              onClick={() => handlePartialRepeat()}>{ partialRepeat ? 'R:ON' : 'R:OFF'}</button>  
            </div>
            
            <div className="repeat__inputs">
              <label className="repeat__input">Min: <input type="number" value={point.start} onChange={(e) => handleStartPoint(e)} /></label>
              <label className="repeat__input">Max: <input type="number" max={duration} value={point.end} onChange={(e) => handleEndPoint(e)} /></label>
            </div>
          </div>*/}
          </div>
        </div>

        <div className="captions">
          <div className="captions__tabs">
            <button className="captions__tabsTitle" type="button" onClick={onClickCaption}>EN</button>
            <button className="captions__tabsTitle" type="button" onClick={onClickCaption}>JP</button>
            { captions() }
          </div>
        </div>
      </div>
  )
}
 

export default YouTube;
