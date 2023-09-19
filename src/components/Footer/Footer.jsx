import { MainFootContainer, ListContainer, MainFootContainer2, MainFootOutContainer2, MainFootContainer300px } from "../../styles/FooterStyles"
import { Facebook, Twitter, LinkedIn, YouTube } from "@mui/icons-material"
import { ReactComponent as BlackLogoIcon } from '../../assets/LogoBlack.svg'
import { useMediaQuery } from "@mui/material"

export default function Footer() {

  const mobileScreen = useMediaQuery('(max-width: 750px)');

  return (
    <>
      {mobileScreen ? (
        <MainFootContainer300px>
          <div style={{ alignSelf: 'center' }}>
            <BlackLogoIcon
              width={'100vw'}
              style={{ height: 70, margin: '15 0' }}
            />
          </div>
          <div>
            <ListContainer>
              <li><b>Meet us</b></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Carrers</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Blog</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>About Shops</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Policies</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Investor Relations</a></li>
            </ListContainer>
          </div>
          <div>
            <ListContainer>
              <li><b>Partner Up</b></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Sell products on Shops</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Sell apps on Shops</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Sell books on Shops</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Become a Partner</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Learn to sell</a></li>
            </ListContainer>
          </div>
          <div>
            <ListContainer>
              <li><b>Community</b></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Announcements</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>News</a></li>
              <li></li>
            </ListContainer>
          </div>
          <div>
            <ListContainer>
              <li><b>Help & Contact</b></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Contact us</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Your Account</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Your Orders</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Returns & Replacements</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Help</a></li>
            </ListContainer>
          </div>
        </MainFootContainer300px>
      ) : (
        <MainFootContainer>
          <div style={{ alignSelf: 'center' }}>
            <BlackLogoIcon
              width={150}
              style={{ height: 50 }}
            />
          </div>
          <div>
            <ListContainer>
              <li><b>Meet us</b></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Carrers</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Blog</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>About Shops</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Policies</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Investor Relations</a></li>
            </ListContainer>
          </div>
          <div>
            <ListContainer>
              <li><b>Partner Up</b></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Sell products on Shops</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Sell apps on Shops</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Sell books on Shops</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Become a Partner</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Learn to sell</a></li>
            </ListContainer>
          </div>
          <div>
            <ListContainer>
              <li><b>Community</b></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Announcements</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>News</a></li>
              <li></li>
            </ListContainer>
          </div>
          <div>
            <ListContainer>
              <li><b>Help & Contact</b></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Contact us</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Your Account</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Your Orders</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Returns & Replacements</a></li>
              <li><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Help</a></li>
            </ListContainer>
          </div>
        </MainFootContainer>
      )}
      <MainFootOutContainer2>
        <MainFootContainer2>
          <Facebook sx={{ color: 'white', fontSize: 40, marginRight: 2, cursor: 'pointer' }} onClick={() => window.open('https://www.facebook.com')} />
          <Twitter sx={{ color: 'white', fontSize: 40, marginRight: 2, cursor: 'pointer' }} onClick={() => window.open('https://www.twitter.com')} />
          <LinkedIn sx={{ color: 'white', fontSize: 40, marginRight: 2, cursor: 'pointer' }} onClick={() => window.open('https://www.Linkedin.com')} />
          <YouTube sx={{ color: 'white', fontSize: 40, cursor: 'pointer' }} onClick={() => window.open('https://www.youtube.com')} />
        </MainFootContainer2>
        <span>&copy; Created by Kevin Juarez - 2023</span>
      </MainFootOutContainer2>
    </>
  )
}