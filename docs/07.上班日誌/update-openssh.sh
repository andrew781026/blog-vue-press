# 安裝 make 指令
apt-get update && apt-get install build-essential -y

## 安装 zlib
apt-get update && apt-get install zlib1g-dev -y

## 更新 openssl
wget https://www.openssl.org/source/openssl-1.1.1h.tar.gz
tar zxvf openssl-1.1.1h.tar.gz
cd openssl-1.1.1h
./config shared zlib
make -j 8
make install

## 将openssl 的lib 库添加到系统，并使用
echo "/usr/local/lib" > /etc/ld.so.conf.d/openssl.conf
ldconfig

## 安装 openssh 新版本 8.4p1
apt-get install libpam0g-dev   -y

wget --no-check-certificate https://fastly.cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-8.4p1.tar.gz

tar zxvf openssh-8.4p1.tar.gz

cd openssh-8.4p1


./configure --prefix=/usr \
--sysconfdir=/etc/ssh \
--with-md5-passwords \
--with-pam --with-zlib \
--with-ssl-dir=/usr/local \
--with-privsep-path=/var/lib/sshd #需要指定openssl的安装路径

make -j 8
make install
