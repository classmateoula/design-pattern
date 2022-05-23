/**
 * 适配器模式
 */

interface MediaPlayer {
    play(audioType: string, fileName: string): void;
}

interface AdvancedMediaPlayer {
    playVlc(fileName: string): void;
    playMp4(fileName: string): void;
}

class VlcPlayer implements AdvancedMediaPlayer {
    playVlc(fileName: string): void {
        console.log('play vlc:', fileName);
    }

    playMp4(fileName: string): void {
        // 
    }
}

class Mp4Player implements AdvancedMediaPlayer {
    playVlc(fileName: string): void {
        // 
    }

    playMp4(fileName: string): void {
        console.log('play mp4', fileName);
    }
}

class MediaAdapter implements MediaPlayer {

    advancedMusicPlayer: AdvancedMediaPlayer;

    constructor(audioType: string) {
        if(audioType === 'vlc') {
            this.advancedMusicPlayer = new VlcPlayer();
        } else {
            this.advancedMusicPlayer = new Mp4Player();
        }
    }
    
    play(audioType: string, fileName: string): void {
        if(audioType === 'vlc') {
            this.advancedMusicPlayer.playVlc(fileName);
        } else {
            this.advancedMusicPlayer.playMp4(fileName);
        }
    }
}

class AudioPlayer implements MediaPlayer {
    private mediaAdapter?: MediaAdapter;

    play(audioType: string, fileName: string): void {
        if(audioType === 'mp3') {
            console.log('play mp3', fileName);
        } else if(['vlc', 'mp4'].includes(audioType)) {
            this.mediaAdapter = new MediaAdapter(audioType);
            this.mediaAdapter.play(audioType, fileName);
        } else {
            console.log('media ', audioType);
        }
    }
}

class AdapterPatternDemo {
    static main(...args: string[]): void {
        const player = new AudioPlayer();

        player.play('mp3', 'jojo.mp3');
        player.play('mp4', '/usr/local/jojo.mp4');
        player.play('vlc', 'http://localhost:3001/jojo.vlc');
        player.play('avi', 'https://www.baidu.com/jojo.avi');
    }
}

AdapterPatternDemo.main();

export {};

/**
 * 根据参数选择播放类型，更方便，与生产模式相似
 * 为什么多声明两个类呢 🤷‍♂️
 */
