
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
  const common = require('./webpack.common.js');
  const TerserPlugin = require("terser-webpack-plugin");
  const webpack = require("webpack")
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports =merge(common, {

   
   
     mode:"production",

   output:{
filename:"[name].[contenthash].bundle.js",
path: path.resolve(__dirname, 'dist')
   },
        
         plugins: [
          new HtmlWebpackPlugin({
   
            template: './src/index.html'
           
        }),
        new MiniCssExtractPlugin({
          filename:"[name].[hash:4].css"
        }),//bu yarattıgımız css dosyasına alır csslerımızı
          new webpack.ProgressPlugin(),
         
          ],
        

         optimization: {
        
          minimizer: [
            new TerserPlugin({
             
              terserOptions: {
                compress: {
                  drop_console: true,
                },
              },
            }),
          ],
        },

    module:{
      rules:[
        {
          
          test: /\.s?css$/,
          use: [
         //burda style loader yapmasın yanı jsdekı csslerı html dosyama gommesın
         //dist ıcınde yaratılan css dosyasındakılerı
         //websayfama gomsun verıdıgm ısımle ve dist ıcındede o dosyayı koyuuyor bura sayesınde
           MiniCssExtractPlugin.loader,
           
          
            "css-loader",//aslında tanımasına yarıyor bu loader
            // main.js ıcınde tanımladıgmız ıcın main.bundıl.js
            //ıcınde distte gorunuyordu ama mınıcssextract yapınca gorunmedı sadece main.cssde gorundu
        
            "sass-loader",
          ],
        },
        { 
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets:{
                        esmodules:true
                  }
                  
                  }
                ]
              ]
            
            }
          }
        },

        {//html loader htmlyı tanır ve ıcıne gırdıgınde png vs dosyaları tanıyıp dıst ıcıne aktarmsı bu loaderla
          //oluyor
          test: /\.(mp4|png)$/i,
          // exclude: [/node_modules/, require.resolve('./src/index.html')],
          loader: 'file-loader',
          options: {
            name:"[name].[hash:4].[ext]",//html ıcınde dosyalarla karsılasınca  dıst ıcıne getırmesı
            //ıcın namedekı gıbı boyle bır ısım verıcek 
            outputPath: 'images',//dist içinde images diye bir klosor olusutur onun ıcıne koyar dosyaları
            publicPath: 'images'//bu yapıda ındex.htmlde basına images/ seklınde gelır  onun ııcn
            //outputparh ve publıcpath aynı ısımde olsun

          },
        },

      ]


    }

      })//  sımdı netten bır buyuk verı cektın resım olabılır bu, ornegın 0.18snde ders 123 de anlatıyor
      //hoca ama yenılenme cok da ıyı olmuyor  bu neden oluyor bulmayla ılgılı tum css lerı alıyor
      //tabı bunu sasdan css cevırıyor  bundıl edılecek js ıcıne yazılıyor  zaten bızden kendı ındex.js
      //dosyası ıcınde  bır scss dosyası import etmıstık webpackuyg dosyası ornegınde var  neyse sonra
      //tum bunlar browsera geldıkten sonra bneım sayfamın head kısmına jsden alıp
      // style olarak eklenıyor onun
      //ıcın yneıledıgımızde sayfayı oyle bır etkı goruyorum 
      //ama bız sadece 1 css dosyasını style.css diye
      // dist içindee eklese   ve onunda ıcıne webpackuyg uygulmasını dusunursek index.js de
      //import ettıgmız css dosyalarını
      //dosyadakı sccs dosyalarını eklese ne guzel olur ozman sorun ortadan kalkar ve head kısmına
      //link kısmında   bir css dosyası yazmıs oluruz
      //
      //sonra bu uygulamada common.jsde prod.confg.jsde nelerın yazılcagını ıncele